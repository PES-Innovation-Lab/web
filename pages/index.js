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
const main_title_style = {
    fontFamily:'Poppins, sans-serif',
    textAlign: "center",
    fontSize: "3.5rem",
    color: '#7cb342',
}
const former_style = {
    fontFamily:'Poppins, sans-serif',
    textAlign: "center",
    fontSize: "2rem",
    color: '#7cb342',
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
    color: '#74a342',
}

const body_heading_style={
    fontSize: '3rem',
    textAlign: "center",
    color: '#2e7d32',
    textAlign:"center",
}

const useStyles = makeStyles({
    card:{
        maxWidth:200,
        textAlign:"center",
        backgroundColor: "transparent",
        height: 150
    },
    title: {
      fontSize: "1.5rem",
      fontFamily: 'Red Hat Display, sans-serif',
      color: "white",
    },
    content: {
      fontSize : "2rem",
      fontFamily: "Red Hat Display, sans-serif",
      color: "white",
    },
  });

const profstyles = makeStyles({
    root: {
      display: 'flex',
      width: 500,
      alignText: "center",
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 200,
      height: 200,
    },
  });

function Index(){
    const classes = useStyles();
    const profclasses = profstyles();
    return (
    <Layout title={'PES Innovation Lab'}>
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
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="inherit">
                                Years of excellence
                            </Typography>
                            <Typography className={classes.content} component="p">
                                10
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="inherit">
                                Active Members
                            </Typography>
                            <Typography className={classes.content} component="p">
                                244
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="inherit">
                                Projects Completed
                            </Typography>
                            <Typography className={classes.content} component="p">
                                63
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="inherit">
                                Events Organised
                            </Typography>
                            <Typography className={classes.content} component="p">
                                21
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        <Container>
             <p id="about_title" style={body_heading_style}>
                    PROFESSORS</p>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid item>
                    <Card className={profclasses.root}>
                        <div className={profclasses.details}>
                            <CardContent className={profclasses.content}>
                                <Typography component="h5" variant="h5">
                                    Prof. Rajasekar M
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Faculty Head of PES Innovation Lab
                                </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            className={profclasses.cover}
                            image="/images/mlab/Rajasekar_profile.jpg"
                            title="Faculty Head of PES Innovation Lab"
                        />
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={profclasses.root}>
                            <div className={profclasses.details}>
                                <CardContent className={profclasses.content}>
                                    <Typography component="h5" variant="h5">
                                        Dr. Venkatarangan M
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Faculty Head of PES Innovation Lab
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardMedia
                                className={profclasses.cover}
                                image="/images/mlab/Venkatarangan_profile.jpg"
                                title="Faculty Head of PES Innovation Lab"
                                style={{alignSelf:"flex-end"}}
                            />
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={profclasses.root}>
                        <div className={profclasses.details}>
                            <CardContent className={profclasses.content}>
                                <Typography component="h5" variant="h5">
                                    Dr. A. Srinivas
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Founder of PES Innovation Lab
                                </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            className={profclasses.cover}
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

export default Index;