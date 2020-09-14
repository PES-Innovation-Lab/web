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

const content={
      flex: '1 0 auto',
}
    
const cover={
      width: 200,
      height: 200,
}

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
                <Container>
                    <p id="about_title" style={body_heading_style}>
                            PROFESSORS</p>
                    <Grid container direction="column" alignItems="center" spacing={3}>
                        <Grid item>
                            <Card style={root_style}>
                                <div style={details}>
                                    <CardContent style={content}>
                                        <Typography component="h5" variant="h5">
                                            Prof. Rajasekar M
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Faculty Head of PES Innovation Lab
                                        </Typography>
                                    </CardContent>
                                </div>
                                <CardMedia
                                    style={cover}
                                    image="/images/mlab/Rajasekar_profile.jpg"
                                    title="Faculty Head of PES Innovation Lab"
                                />
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card style={root_style}>
                                    <div style={details}>
                                        <CardContent style={content}>
                                            <Typography component="h5" variant="h5">
                                                Dr. Venkatarangan M
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                Faculty Head of PES Innovation Lab
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <CardMedia
                                        style={cover}
                                        image="/images/mlab/Venkatarangan_profile.jpg"
                                        title="Faculty Head of PES Innovation Lab"
            
                                    />
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card style={root_style}>
                                <div style={details}>
                                    <CardContent style={content}>
                                        <Typography component="h5" variant="h5">
                                            Dr. A. Srinivas
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Founder of PES Innovation Lab
                                        </Typography>
                                    </CardContent>
                                </div>
                                <CardMedia
                                    style={cover}
                                    image="/images/mlab/Srinivas_profile.jpg"
                                    title="Founder of PES Innovation Lab"
                                />
                            </Card>
                        </Grid>
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