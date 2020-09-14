// pages/events.js
import Layout from "../components/Layout";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    typography_heading: {
      fontSize : "3rem",
      fontFamily: "Changa, sans-serif",
      color: "#8bc34a",
      textAlign: "center",
      marginTop: "1em",
    },
    body_text: {
        color: "white",
    },
    event_heading: {
        color: "#7cb342",
        fontSize: "1.5rem",
        fontFamily: "Changa, sans-serif",
    }
  });

function Events(){
    const styles = useStyles();
    return(
    <Layout title={'PIL | Events'} active={'Events'}>
        <Container maxWidth="md">
            <Typography className={styles.typography_heading}>
                What we do
            </Typography>
            <br></br>
            <Typography style={{textAlign:"center", color:"white"}}>
                We've got the perfect platform and events for your skills and ideas to explore new heights
            </Typography>

            <Grid container spacing={3} style={{marginTop:"3em"}}>
                <Grid item xs={4} style={{alignItems:"center"}}>
                    <img src="/images/mlab/hackathon.png"/>
                </Grid>
                <Grid item xs>
                    <Typography className={styles.event_heading}>
                       HashCode
                    </Typography>
                    <Typography className={styles.body_text}>
                        HashCode is the annual 24-hour hackathon organised by the Lab, with students proposing
                        interesting ideas and presenting projects from several domains. The hackathon also
                        provides a learning platform to participating teams, with mentors and members of academia
                        assisting them. Esteemed personalities from different industrial backgrounds come to judge
                        the show, evaluating projects from all possible angles. HashCode 2020 is the 9th edition
                        of the annual hackathon. The winners bag cash prizes worth up to one lakh indian rupees.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} style={{marginTop:"3em"}}>
                <Grid item xs>
                    <Typography className={styles.event_heading}>
                       Summer Internship Program
                    </Typography>
                    <br></br>
                    <Typography className={styles.body_text}>
                        We, at PES Innovation Lab, organise an annual summer internship for new recruits
                        to work on cutting-edge research projects in varied domains such as Robotics, Machine Learning,
                        Artificial Intelligence, Sensor Networking, Virtual Reality, Brain-Computer Interface, Cloud computing and App Development.
                        The results and prototype demonstrations of these projects are presented at Roadshow, an event attended by a large number
                        of students across disciplines at PES University.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src="/images/mlab/internship.png"/>
                </Grid>
            </Grid>
        
            <Grid container spacing={3} style={{marginTop:"3em"}}>
                <Grid item xs={4}>
                    <img src="/images/mlab/roadshow.png"/>
                </Grid>
                <Grid item xs>
                    <Typography className={styles.event_heading}>
                       Roadshow
                    </Typography>
                    <br></br>
                    <Typography className={styles.body_text}>
                        Roadshow is an Innovation Expo organized by the Lab each year after the Summer Internship Program.
                        PES Lab summer interns present the projects that they have worked on during the internship.
                        This serves as a great platform for students from PES University to interact with members and
                        gain knowledge about the cutting-edge technologies that we work on. Roadshow also serves as a platform
                        where our interns receive constructive feedback and further insights on their projects from experienced professionals,
                        professors and their peers.
                    </Typography>
                </Grid>
            </Grid>
            
            <Grid container spacing={3} style={{marginTop:"3em"}}>
                <Grid item xs>
                    <Typography className={styles.event_heading}>
                       Incito
                    </Typography>
                    <br></br>
                    <Typography className={styles.body_text}>
                        Incito is the ideathon organized by PES Lab.
                        It is a conglomerate of brilliant minds, all incubating innovative ideas.
                        The shortlisted 10 best ideas battle it out in the final round to win cash prizes up to Rs. 40,000
                        in all. The participants test the design and feasibility of their ideas without the constraints
                        of implementing the same, hence encouraging innovative thinking. The best ideas are also provided
                        the platform and resources to implement their ideas and make these a reality.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src="/images/mlab/ideathon.png"/>
                </Grid>
            </Grid>
        </Container>
    </Layout>
    );
}

export default Events;