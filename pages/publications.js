// pages/publications.js

import Layout from "../components/Layout";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Chip, Container } from "@material-ui/core";
import {useEffect, useState} from 'react';

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    headingStyle: {
        fontSize: "1.5rem",
        marginTop: "1em",
    },
    contentStyle:{
        fontSize: "1rem",
        marginTop: "1em",
    }
  });

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    
    return (
        <React.Fragment>
        <TableRow className={classes.root}>
            <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
            <strong>{row.title}</strong>
            </TableCell>
            <TableCell align="center">{row.year}</TableCell>
            <TableCell align="center">{row.conference}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                            Authors:
                        </Typography>
                        {
                            row.authors.map((person)=>
                                <Chip
                                    label={person}
                                    className='projectKeywordChip'
                                >
                                </Chip>
                            )
                        }
                        <Typography className={classes.headingStyle}>
                            Description:
                        </Typography>
                        <Typography className={classes.contentStyle}>
                            {row.short_description}
                        </Typography>
                        <Typography className={classes.contentStyle}>
                            <strong>Link to publication:</strong> {row.link}
                        </Typography>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
        </React.Fragment>
    );
}

function Publications() {
    const [data, setData] = useState({ "publications" :[]});
        
    useEffect(() => {
        const fetchData = async() =>{
            const result = await fetch("http://pil-api.herokuapp.com/publications");
            let publications = await result.json();
            for (let key in publications){
                publications[key].authors = publications[key].authors.split(",");
            }
            setData({"publications": publications});
        }
        fetchData();
    }, []);
    
    return (
    <Layout title={'PIL | Publications'} active={'Publications'}>
        <Typography className='pageHeader'>
            Publications
        </Typography>
        <Container>
            <TableContainer component={Paper} style={{marginBottom: 50, marginTop: 50}}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell><strong>Title</strong></TableCell>
                            <TableCell align="center"><strong>Year</strong></TableCell>
                            <TableCell align="center"><strong>Conference</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.publications.map((pub) => (
                            <Row key={pub.title} row={pub} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    </Layout>
    );
}

// export async function getServerSideProps(context){
//     const res = await fetch("https://pil-api.herokuapp.com/publications");
//     const publications = await res.json();
//     for (let key in publications){
//         publications[key].authors = publications[key].authors.split(",");
//     }
//     return {props:{publications}};
// }

export default Publications;