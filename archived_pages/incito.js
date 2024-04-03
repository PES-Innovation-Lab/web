// pages/incito.js
import { CardMedia, Container, Grid, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import Layout from '../components/Layout'
// import '../css/hashCode.css';
import '../node_modules/react-alice-carousel/lib/alice-carousel.css'
import '../public/data/events/incito.json'
import incitoData from '../public/data/events/incito.json'

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
})

const CarouselImage = ({ img }) => (
    <CardMedia className="sliderImage" image={img} />
)

function Incito() {
    const styles = designstyles()
    const [data, setData] = useState({ events: [] })
    const [isDataLoaded, setDataLoaded] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            // const result = await fetch('https://api-vercel-mlabwebdev.vercel.app/events/incito');
            const result = await fetch('/data/events/incito.json')
            if ((await result.status) !== 200) {
                alert('API Error. Try again later')
            } else {
                const events = await result.json()
                setData({ events: events })
            }
            setDataLoaded(true)
        }
        // fetchData();

        const fetch = () => {
            const events = incitoData
            setData({ events: events })
            setDataLoaded(true)
        }
        fetch()
    }, [])
    return (
        <Layout title={'PIL | Incito'} active={'Incito'}>
            <div className="hashCodeHeadSection">
                <Container>
                    <Typography className="pageHeader">Incito</Typography>
                    <Typography className={styles.subtitleStyle}>
                        Ideathon
                    </Typography>
                    <Typography
                        className={styles.subtitleStyle}
                        style={{ marginTop: 40 }}
                    >
                        Incito is a highly competitive ideathon where
                        participants come up with ideas of their own that solve
                        important social problems, environmental and industrial
                        problems out there in the world.
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
                This will be an event description, if any
            </Typography>
            <Grid container spacing={3} style={{marginTop: 20}} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <img style={{width:"95%"}} src={`/images/events/hashcode/HashCode2019.jpg`}/>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                        <CarouselImage img={`/images/events/hashcode/2019/hashcode2019_1.jpg`} />
                        <CarouselImage img={`/images/events/hashcode/2019/hashcode2019_2.jpg`} />
                        <CarouselImage img={`/images/events/hashcode/2019/hashcode2019_3.jpg`} />
                    </AliceCarousel>
                </Grid>
            </Grid>
        </Container>
        </div> */}
                {!isDataLoaded ? (
                    <div className={styles.spinnerTextStyle}>
                        <Typography style={{ fontSize: '1.5rem' }}>
                            Loading Data
                        </Typography>{' '}
                        <CircularProgress
                            style={{ color: '#7cb342', marginTop: '1em' }}
                        />
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
                                    justifyContent="center"
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
                                                <CarouselImage
                                                    key={image}
                                                    img={`${image}`}
                                                />
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
    )
}
export default Incito
