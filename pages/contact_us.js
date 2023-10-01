import Layout from '../components/Layout';
import { Container, Typography, Grid, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
// import '../css/contact_us.css';

function contactUs() {
  return (
    <Layout title={'PIL | Contact Us'} active={'Contact Us'}>
      <Typography className="pageHeader">
        Get in touch and Keep up-to-date
      </Typography>
      <Container>
        <Typography className="contactPageSubHeader">Contact Us</Typography>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <a
              href="mailto:innovationlab@pes.edu"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <EmailIcon className="contactIcon" fontSize="large" />
              </IconButton>
            </a>
            <a
              href="mailto:innovationlab@pes.edu"
              target="_blank"
              rel="noreferrer"
            >
              <Typography className="contact_text">
                innovationlab@pes.edu
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <a
              href="mailto:pes.mlab@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <EmailIcon className="contactIcon" fontSize="large" />
              </IconButton>
            </a>
            <a
              href="mailto:innovationlab@pes.edu"
              target="_blank"
              rel="noreferrer"
            >
              <Typography className="contact_text">
                pes.mlab@gmail.com
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Container>

      <Container style={{ marginTop: '1em' }}>
        <Typography className="contactPageSubHeader">Social</Typography>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <a
              href="https://www.linkedin.com/company/pes-innovation-lab"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <LinkedInIcon className="contactIcon" fontSize="large" />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/company/pes-innovation-lab"
              target="_blank"
              rel="noreferrer"
            >
              <Typography className="contact_text">
                www.linkedin.com/company/pes-innovation-lab
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <a
              href="https://www.instagram.com/pes.lab/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <InstagramIcon className="contactIcon" fontSize="large" />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/pes.lab/"
              target="_blank"
              rel="noreferrer"
            >
              <Typography className="contact_text">
                www.instagram.com/pes.lab/
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <a
              href="https://github.com/PES-Innovation-Lab"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <GitHubIcon className="contactIcon" fontSize="large" />
              </IconButton>
            </a>
            <a
              href="https://github.com/PES-Innovation-Lab"
              target="_blank"
              rel="noreferrer"
            >
              <Typography className="contact_text">
                https://github.com/PES-Innovation-Lab
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <a href="http://bit.ly/pil-yt" target="_blank" rel="noreferrer">
              <IconButton>
                <YouTubeIcon className="contactIcon" fontSize="large" />
              </IconButton>
            </a>
            <a href="http://bit.ly/pil-yt" target="_blank" rel="noreferrer">
              <Typography className="contact_text">
                http://bit.ly/pil-yt
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default contactUs;
