// pages/join_us.js

import Layout from '../components/Layout';
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
import { Container } from '@material-ui/core';

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
    textAlign: 'left',
  },
}));

function JoinUs() {
  const data = [
    {
      step: '1',
      step_name: 'Keep your eyes peeled',
      step_desc: 'Lookout for posters on campus and social media posts',
    },
    {
      step: '2',
      step_name: 'Register',
      step_desc: 'Once you see a post, register for the recruitment process',
    },
    {
      step: '3',
      step_name: 'Show us what you are made of',
      step_desc: 'Compete with your peers in an aptitude challenge',
    },
    {
      step: '4',
      step_name: 'Show us your passion',
      step_desc: 'Show us how much engineering and problem-solving excites you',
    },
    {
      step: '5',
      step_name: 'Formalities',
      step_desc: 'Wait for further announcements and complete any formalities',
    },
    {
      step: '6',
      step_name: 'Yay! All Done',
      step_desc:
        "If you get selected, welcome to PES Innovation Lab! If you didn't, don't worry! We look forward to seeing you the following year!",
    },
  ];
  const classes = useStyles();
  return (
    <Layout title={'PIL | Join Us'} active={'Join Us'}>
      <Typography className={'pageHeader'}>
        Become a member of PES Innovation Lab
      </Typography>
      <Container></Container>
      <Container>
        <Timeline align="alternate">
          {data.map((step) => (
            <TimelineItem key={step.step}>
              <TimelineOppositeContent>
                <Typography variant="body2" className={classes.date}>
                  {['Step', step.step].join(' ')}
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
                    variant="h5"
                    component="h1"
                    className={classes.content}
                  >
                    <strong>{step.step_name}</strong>
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={classes.content}
                  >
                    {step.step_desc}
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

export default JoinUs;
