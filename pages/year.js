// pages/year.js

import Layout from "../components/Layout";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    date:{
        margin: '5px',
        color: "white",
        fontSize: "1rem",
    },
    content:{
        margin: '5px',
    }
  }));

function Year() {
    const data = [
      {"month":"February", "event_name":"Incito Ideathon"},
      {"month":"March-April", "event_name":"Summer Internship Recruitments"},
      {"month":"June-July", "event_name":"Summer Internship"},
      {"month":"August", "event_name":"RoadShow"},
      {"month":"October/November","event_name":"#Code Hackathon"},
    ];
    const classes = useStyles();
    return (
    <Layout title={'PIL | A year'} active={'A Year'}>
        <Typography className={'pageHeader'}>
            A year at PES Innovation Lab
        </Typography>
        <Container>
            
        </Container>
        <Container>
            <Timeline align="alternate">
                {
                    data.map((event) => 
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" className={classes.date} >
                                    {event.month}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot style={{color: "white", backgroundColor:"green"}}>
                                <ArrowDownwardIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1" className={classes.content}>
                                        {event.event_name}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                    </TimelineItem>
                    )
                }
            </Timeline>
        </Container>
    </Layout>
    );
}

export default Year;