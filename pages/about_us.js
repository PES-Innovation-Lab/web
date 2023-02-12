// pages/about_us.js

import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  date: {
    margin: '5px',
    color: 'white',
    fontSize: '1rem',
  },
  content: {
    margin: '5px',
  },
}));

function AboutUs() {
  const [data, setData] = useState({ timeline: [] });

  useEffect(() => {
    const fetchData = async () => {
      // const result = await fetch('https://api-vercel-mlabwebdev.vercel.app/about');
      const result = await fetch('/data/about.json');
      if ((await result.status) !== 200) {
        alert('API Error. Try again later');
      } else {
        const timeline = await result.json();
        setData({ timeline: timeline });
      }
    };
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <Layout title={'PIL | History'} active={'Our History'}>
      <Typography className={'pageHeader'}>Our History</Typography>
      <Container></Container>
      <Container>
        <Timeline align="alternate">
          {data.timeline.map((event) => (
            <TimelineItem key={event.event_title}>
              <TimelineOppositeContent>
                <Typography variant="body2" className={classes.date}>
                  {event.year}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  style={{ color: 'white', backgroundColor: 'green' }}
                >
                  <ArrowDownwardIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={classes.content}
                  >
                    {event.event_title}
                  </Typography>
                  <Typography className={classes.content}>
                    {event.event_description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Layout>
  );
}

// export async function getServerSideProps(context){
//     const res = await fetch("https://api-vercel-mlabwebdev.vercel.app/about");
//     const timeline = await res.json();
//     return {props:{timeline}};
// }

export default AboutUs;
