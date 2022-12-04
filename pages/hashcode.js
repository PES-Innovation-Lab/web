// pages/hashcode.js
import Layout from '../components/Layout';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, CardMedia } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/hashCode.css';
import '../node_modules/react-alice-carousel/lib/alice-carousel.css';

const designstyles = makeStyles({
  subtitleStyle: {
    fontSize: '1.5rem',
    color: 'white',
    textAlign: 'center',
  },
  eventBodyStyle: {
    fontSize: '1.5rem',
    color: 'white',
    textAlign: 'left',
    marginTop: '1em',
    marginBottom: '1em',
  },
  spinnerTextStyle: {
    textAlign: 'center',
    color: '#7cb342',
  },
});

const CarouselImage = ({ img }) => (
  <CardMedia className="sliderImage" image={img} />
);

function HashCode() {
  const styles = designstyles();
  const [data, setData] = useState({ events: [] });
  const [isDataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://api-vercel-mlabwebdev.vercel.app/events/hashcode'
      );
      if ((await result.status) !== 200) {
        alert('API Error. Try again later');
      } else {
        const events = await result.json();
        setData({ events: events });
      }
      setDataLoaded(true);
    };
    fetchData();
  }, []);
  return (
    <Layout title={'PIL | Hashcode'} active={'Hashcode'}>
      <div className="hashCodeHeadSection">
        <Container>
          <Typography className="pageHeader">HashCode</Typography>
          <Typography className={styles.subtitleStyle}>
            Hungry to Innovate? Grab a Byte.
          </Typography>
          <Typography
            className={styles.subtitleStyle}
            style={{ marginTop: 40 }}
          >
            HashCode is the annual 24-hour hackathon organised by the Lab, with
            students proposing interesting ideas and presenting projects from
            several domains. The hackathon also provides a learning platform to
            participating teams, with mentors and members of academia assisting
            them. Esteemed personalities from different industrial backgrounds
            come to judge the show, evaluating projects from all possible
            angles. HashCode 2019 would be the 8th edition of the annual
            hackathon. The winners bag cash prizes totalling up to Rs. one lakh.
          </Typography>
        </Container>
      </div>



      <div className="hashCodeContainer">
        {/* This is a sample for reference */}
        {/* <div className='hashCodeSection'>
        <Container>
            <Typography className='hashCodeTitle'>
                HashCode 2019
            </Typography>
            <Typography className='hashCodeSponsors'>
                Sponsored by RedHat, IEEE CAS and Rotary Club
            </Typography>
            <Typography className='hashCodeDescription'>
                    {event.description}
            </Typography>
            <Grid container spacing={3} style={{marginTop: 20}} justify="center">
                <Grid item xs={12} sm={4}>
                    <img style={{width:"95%"}} src={`GOOGLE_DRIVE_LINK`}/>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                        <CarouselImage img={`GOOGLE_DRIVE_LINK`} />
                        <CarouselImage img={`GOOGLE_DRIVE_LINK`} />
                        <CarouselImage img={`GOOGLE_DRIVE_LINK`} />
                    </AliceCarousel>
                </Grid>
            </Grid>
        </Container>
        </div> */}
        {!isDataLoaded ? (
          <div className={styles.spinnerTextStyle}>
            <Typography style={{ fontSize: '1.5rem' }}>Loading Data</Typography>{' '}
            <CircularProgress style={{ color: '#7cb342', marginTop: '1em' }} />
          </div>
        ) : (
          data.events.map((event) => (
            <div className="hashCodeSection" key={event.event_name}>
              <Container>
                <Typography className="hashCodeTitle">
                  {event.event_name}
                </Typography>
                <Typography className="hashCodeDate">
                  {event.event_date + ' ' + event.year}
                </Typography>
                <Typography className="hashCodeSponsors">
                  {event.sponsor_text}
                </Typography>
                <Typography className="hashCodeDescription">
                  {event.description}
                </Typography>
                <Grid
                  container
                  spacing={3}
                  style={{ marginTop: 20 }}
                  justify="center"
                >
                  <Grid item xs={12} sm={4}>
                    <img
                      style={{ width: '95%' }}
                      src={`${event.poster_link}`}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <AliceCarousel
                      autoPlay
                      autoPlayInterval="3000"
                      buttonsDisabled
                    >
                      {event.image_links.map((image) => (
                        <CarouselImage key={image} img={`${image}`} />
                      ))}
                    </AliceCarousel>
                  </Grid>
                </Grid>
              </Container>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}
export default HashCode;
