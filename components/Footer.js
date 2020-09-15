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
    color: "#8bc34a",
    fontSize: "1.5rem",
    textAlign: "center",
};

const contentBodyStyle ={
    color: "white",
    fontSize: "1rem",
    marginTop: "1em",
    textAlign: "center",
};

const Footer = () => (
    <div className='footer'>
        <div className='footerContent'>
            <div className='footerSection'>
            </div>
            <div className='footerSection'>
                <Grid container justify="center">
                    <Link href="/" >
                        <IconButton disableFocusRipple edge="start">
                            <img style={{width: '80%'}} className='footerLogo' src="images/mlab/mlab_logo.png"/>
                        </IconButton>
                    </Link>
                </Grid>
            </div>
            <div className='footerSection'>
                <Typography style={contentTitleStyle}>
                    Address
                </Typography>
                <Typography style={contentBodyStyle}>
                    PES University, RR Campus
                    Banshankari 3rd stage
                    560085
                    Bangalore, Karnataka,
                    India
                </Typography>                                        
            </div>
            <div className='footerSection'>
                <Typography style={contentTitleStyle}>
                    Connect
                </Typography>
                <Typography style={contentBodyStyle}>
                    pes.mlab@gmail.com
                </Typography>
                <Grid container justify="center">
                    <Grid item xs={2} style={{textAlign: 'center'}}>
                        <a href="https://www.linkedin.com/company/pes-innovation-lab" target='_blank'>
                            <IconButton><LinkedInIcon className='memberCardSocialIcons'/></IconButton>
                        </a>
                    </Grid>
                    <Grid item xs={2} style={{textAlign: 'center'}}>
                        <a href="https://www.instagram.com/pes.lab/">
                            <IconButton><InstagramIcon className='memberCardSocialIcons'/></IconButton>
                        </a>
                    </Grid>
                    <Grid item xs={2} style={{textAlign: 'center'}}>
                        <a href="https://github.com/PES-Innovation-Lab" target='_blank'>
                            <IconButton><GitHubIcon className='memberCardSocialIcons'/></IconButton>
                        </a>
                    </Grid>
                </Grid>                
            </div>
            <div className='footerSection'>
            </div>
        </div>
    </div>
);

export default Footer;