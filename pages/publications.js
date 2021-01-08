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
import "../css/projects.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const designStyles = makeStyles({
    spinner_text_style: {
        textAlign:"center",
        color:"#7cb342",
    }
});

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
                            <strong>Link to publication: </strong> <a style={{color: "#8bc34a"}} href={row.link} target='_blank'>{row.link}</a>
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
    const [isDataLoaded, setDataLoaded] = useState(false);
    const designstyles = designStyles();
    useEffect(() => {
        const fetchData = async() =>{
            const result = await fetch("https://pil-api.herokuapp.com/publications");
            if (await result.status != 200){
                alert("API Error. Try again later");
            }else{
                let publications = await result.json();
                for (let key in publications){
                    publications[key].authors = publications[key].authors.split(",");
                }
                setData({"publications": publications});
                setDataLoaded(true);
            }
        }
        fetchData();
    }, []);

    return (
    <Layout title={'PIL | Publications'} active={'Publications'}>
        <Typography className='pageHeader'>
            Recent Publications
        </Typography>
        <Container>
        {
            !isDataLoaded ? <div className={designstyles.spinner_text_style}><Typography style={{fontSize: "1.5rem"}}>Loading Data</Typography> <CircularProgress style={{"color":"#7cb342", "marginTop": "1em"}} /></div> :
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
        }
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
