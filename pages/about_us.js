// pages/about_us.js

import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
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

function AboutUs({ timeline }) {
    const classes = useStyles();
    return (
    <Layout title={'PIL | History'} active={'Our History'}>
        <Typography className={'pageHeader'}>
            Our History
        </Typography>
        <Container>
            
        </Container>
        <Container>
            <Timeline align="alternate">
                {
                    timeline.map((event) => 
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" className={classes.date}>
                                    {event.year}
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
                                        {event.event_title}
                                    </Typography>
                                    <Typography className={classes.content}>{event.event_description}</Typography>
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

export async function getServerSideProps(context){
    const res = await fetch("https://pil-api.herokuapp.com/about");
    const timeline = await res.json();
    return {props:{timeline}};
}

export default AboutUs;