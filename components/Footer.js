// components/Footer.js
import {Grid, Typography, IconButton, Container} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from 'next/link';

const headerStyle = {
    backgroundColor: "black",
    color: "white",
    width: "100%",
    height: "300px",
    marginTop: "2em",
};

const contentTitleStyle ={
    color: "green",
    fontSize: "1.5rem",
};

const contentBodyStyle ={
    color: "white",
    fontSize: "1rem",
    marginTop: "1em",
    textAlign: "center",
};

const Footer = () => (
    <div className="Footer" style={headerStyle}>
        <Container maxWidth="md" style={{marginTop:"2em"}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Link href="/">
                        <IconButton disableFocusRipple edge="start" className='logoButton'>
                            <img width="80%" src="images/mlab/mlab_logo.png"/>
                        </IconButton>
                    </Link>
                    <Typography style={{textAlign: "center"}}>
                        PES Innovation Lab
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography style={contentTitleStyle}>
                        Address:
                    </Typography>
                    <Typography style={contentBodyStyle}>
                        PES University, RR Campus
                        Banshankari 3rd stage
                        560085
                        Bangalore, Karnataka,
                        India
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography style={contentTitleStyle}>
                        Connect:
                    </Typography>
                    <Typography style={contentBodyStyle}>
                        pes.mlab@gmail.com
                    </Typography>
                    <Grid container spacing={3} style={{marginTop:"1em"}}>
                        <Grid item xs={4} style={{textAlign: 'center'}}>
                            <a href="https://www.linkedin.com/company/pes-innovation-lab" target='_blank'>
                                <IconButton><LinkedInIcon className='memberCardSocialIcons'/></IconButton>
                            </a>
                        </Grid>
                        <Grid item xs={4} style={{textAlign: 'center'}}>
                            <a href="https://www.instagram.com/pes.lab/">
                                <IconButton><InstagramIcon className='memberCardSocialIcons'/></IconButton>
                            </a>
                        </Grid>
                        <Grid item xs={4} style={{textAlign: 'center'}}>
                            <a href="https://github.com/PES-Innovation-Lab" target='_blank'>
                                <IconButton><GitHubIcon className='memberCardSocialIcons'/></IconButton>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
);

export default Footer;