// pages/index.js
import Layout from '../components/Layout';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { light } from '@material-ui/core/styles/createPalette';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const main_title_style = {
    fontFamily:'Poppins, sans-serif',
    textAlign: "center",
    fontSize: "3.5rem",
    color: '#8bc34a',
}
const former_style = {
    fontFamily:'Poppins, sans-serif',
    textAlign: "center",
    fontSize: "2rem",
    color: '#8bc34a',
}
const main_content_style = {
    fontFamily:'Red Hat Display, sans-serif',
    fontSize: '2rem',
    textAlign: "center",
    color: 'white',
}

const body_content_style ={
    fontSize: '1.25rem',
    textAlign: "left",
    color: '#8bc34a',
}

const body_heading_style={
    fontSize: '3rem',
    textAlign: "center",
    color: '#8bc34a',
    textAlign:"center",
}

const card_style ={
        maxWidth:200,
        textAlign:"center",
        backgroundColor: "transparent",
        height: 150
}

const title_style = {
      fontSize: "1.5rem",
      fontFamily: 'Red Hat Display, sans-serif',
      color: "white",
};

const content_style={
      fontSize : "2rem",
      fontFamily: "Red Hat Display, sans-serif",
      color: "white",
};

const root_style = {
      display: 'flex',
      width: 500,
      alignText: "center",
    }

const details= {
      display: 'flex',
      flexDirection: 'column',
}


const prof_data = [
    {
        "name":"Prof. Rajasekar M",
        "designation":"Associate Professor",
        "org":"PES University",
        "description":"Prof. M Rajasekar is an Associate Professor in the department of Electronics and Communication Engineering at PES University. He is an alumnus of IIT Madras (Computer Science and Engineering). He brings with him over two decades of rich and varied experience ranging from combatant in Indian Air Force to Systems Engineer and Project Manager in the IT Industry. He manages the PES Innovation Lab at the PES University. He has been actively involved in various projects undertaken at PES Innovation Lab. His research interests include wireless communications, embedded systems and healthcare systems. He handholds student projects in several domains viz. Robotics, IoT, Machine Learning, Sensor Networks and Virtual Reality. Recently, he presented his project works in the International Conferences (TENCON) held in Singapore, Malaysia and Jeju,South Korea. He is an astute listener and motivator.",
        "image":"/images/mlab/Rajasekar_profile.jpg",
    },
    {
        "name":"Dr. Venkatarangan MJ",
        "designation":"Professor",
        "org":"PES University",
        "description":"After leaving Philips in 2015 to follow his passion towards teaching and research, Dr. Venkatarangan joined PES University as the Associate Professor in EEE to focus on Embedded Systems stream. Prior to joining PES University, he spent 20 years in Tektronix, Siemens, HCL Technologies and Philips working in India and abroad serving in roles right from Software Engineer to System Architect. As System Architect he was on technical lead for projects across sites and also supported cross functions like program or purchase management, quality and product strategy for platform evaluation, supplier evaluation and product road-mapping. A significant achievement has been to lead as Architect for first Digital TV for US market and also to develop MP3 Audio products adhering to Microsoft PlaysForSure specifications. Rangan is an alumnus of Chinese University of Hong Kong where he completed is PhD and holds M.Tech and B.E from Mysore University. He current teaches Microcontroller and Applications, Signals and Systems, 'C' Programming and Intoduction to Robotics. His research interests include embedded systems, IoT, Robotics, Automation and Sensor networks.He supports the PES Innovation Lab activities and summer internship projects in domains of embedded systems, IoT Robotics and Automation.",
        "image":"/images/mlab/Venkatarangan_profile.jpg",
    },
    {
        "name":"Dr. A Srinivas",
        "designation":"Founder",
        "org":"PES Innovation Lab",
        "description":"Dr. A Srinivas is the faculty founder of PES Innovation Lab (formerly known as Microsoft Innovation Lab). He is presently the Dean, School of Engineering in Dayananda Sagar University. He has worked for 10 years in Companies/Research Organizations Such as Tata Consulting Engineers, Centre for AI & amp; Robotics (DRDO), Philips Software Centre and Nortel Networks (Sydney,Australia). Academic experience of 19 yrs with KREC, Surathkal, Amrita University, PES University and Monash University (Melbourne, Australia). His Areas of Research Interest: Wireless Networks, Healthcare Informatics. He is extremely passionate about promoting Undergraduate Research.",
        "image":"/images/mlab/Srinivas_profile.jpg",
    }
]
function Index({stats}){
        return (
            <Layout title={'PES Innovation Lab'} active={'Home'}>
                <div>
                    <p style={main_title_style}>PES Innovation Lab</p>
                    <p style={former_style} >(formerly known as Microsoft Innovation Lab)</p>
                </div>
                <br></br>
                <blockquote style={main_content_style}>
                    We are a student community dedicated to cultivating the spirit of research and innovation in budding
                    engineers.
                </blockquote>
                <Container maxWidth="md">
                        <p id="about_title" style={body_heading_style}>
                            ABOUT US</p>
                        <p id="about_content" style={body_content_style} className={light}>
                            PIL is a unique community which inculcates the spirit of student research.
                            Students work with like-minded peers to try and solve carefully chosen real-world problems.
                            The Lab’s activities include the flagship summer internship, HashCode (a hackathon), RoadShow (A project presentation event) and other enriching opportunities such as workshops and tutorials.<br/><br/>
                            Students here, routinely push the boundaries of research by developing products to benefit the masses and publishing their work in conferences and journals of repute. Interns continue working with the lab while in college, sharing insights, starting new projects and mentoring subsequent batches of student interns.<br/><br/>
                            Over the years, the members of PIL have grown into a close-knit family who contribute to the lab long after their graduation.
                        </p>
                </Container>
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        {
                            stats.map((key) => 
                                <Grid item xs>
                                    <Card style={card_style}>
                                        <CardContent>
                                            <Typography style={title_style} color="inherit">
                                                {key.key}
                                            </Typography>
                                            <Typography style={content_style} component="p">
                                                {key.data}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                
                                </Grid>
                            )
                        }
                        
                    </Grid>
                </Container>
                <Container style={{textAlign:"center", alignItems:"center"}} maxWidth="md">
                    <p id="about_title" style={body_heading_style}>
                            PROFESSORS</p>
                        <Grid container spacing={2}>
                        {
                            prof_data.map((prof)=>
                                <Grid item xs={4}>
                                    <Card className="profCard">
                                        <CardMedia
                                            className="profCardImage"
                                            image={prof.image}
                                            title={prof.designation}
                                        />
                                        <div style={details}>
                                            <CardContent>
                                                <Typography component="h5" variant="h5"  className={"profCardDescription"}>
                                                    {prof.name}
                                                </Typography>
                                                <Typography className={"profCardDescription"}>
                                                    {prof.designation}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        
                                    </Card>
                                </Grid>
                            )
                        }
                        </Grid>
                </Container>
            </Layout>
        );
}

export async function getServerSideProps(context){
    const res = await fetch("https://pil-api.herokuapp.com/stats");
    const output = await res.json();
    let stats = [];
    for (let key in output){
        stats.push({key:key,data:output[key]});
    }
    console.log(stats);
    return {props:{stats}};
}


export default Index;