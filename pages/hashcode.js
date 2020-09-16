// pages/hashcode.js
import Layout from "../components/Layout";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, CardMedia } from "@material-ui/core";
import AliceCarousel from 'react-alice-carousel';

const designstyles = makeStyles({
    subtitle_style: {
        fontSize : "1.5rem",
        color: "white",
        textAlign: "center",        
    },
    event_body_style: {
        fontSize : "1.5rem",
        color: "white",
        textAlign: "left",
        marginTop: "1em",
        marginBottom: "1em",
    },
});

const CarouselImage = ({img}) => (
    <CardMedia
        className='sliderImage'
        image={img}
    />
)

function HashCode(){
    const styles = designstyles();

    return (
    <Layout title={'PIL | Hashcode'} active={'Hashcode'}>

        <div className='hashCodeHeadSection'>
            <Container>
                <Typography className='pageHeader'>
                    HashCode
                </Typography>
                <Typography className={styles.subtitle_style}>
                    Hungry to Innovate? Grab a Byte.
                </Typography>
                <Typography className={styles.subtitle_style} style={{marginTop: 40}}>
                    HashCode is the annual 24-hour hackathon organised by the Lab, with students proposing interesting ideas and presenting projects from several domains. The hackathon also provides a learning platform to participating teams, with mentors and members of academia assisting them. Esteemed personalities from different industrial backgrounds come to judge the show, evaluating projects from all possible angles. HashCode 2019 would be the 8th edition of the annual hackathon. The winners bag cash prizes totalling up to Rs. one lakh.
                </Typography>
            </Container>
        </div>        


        <div className='hashCodeContainer'>
        
        <div className='hashCodeSection'>
            <Container>
                <Typography className='hashCodeTitle'>
                    HashCode 2020
                </Typography>
                <Typography className='hashCodeSponsors'>
                    Sponsored by: RedHat
                </Typography>
                <Typography className='hashCodeSponsors'>
                    More information coming soon!
                </Typography>
            </Container>
        </div>

        <div className='hashCodeSection'>
        <Container>
            <Typography className='hashCodeTitle'>
                HashCode 2019
            </Typography>
            <Typography className='hashCodeSponsors'>
                Sponsored by RedHat, IEEE CAS and Rotary Club
            </Typography>
            <Grid container spacing={3} style={{marginTop: 20}} justify="center">
                <Grid item xs={12} sm={4}>
                    <img style={{width:"95%"}} src={`${process.env.ASSET_PREFIX}/images/events/hashcode/HashCode2019.jpg`}/>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                        <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2019/hashcode2019_1.jpg`} />
                        <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2019/hashcode2019_1.jpg`} />
                        <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2019/hashcode2019_2.jpg`} />
                        <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2019/hashcode2019_3.jpg`} />
                        <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2019/hashcode2019_4.jpg`} />
                        <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2019/hashcode2019_5.jpg`} />
                        <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2019/hashcode2019_6.jpg`} />
                        <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2019/hashcode2019_7.jpg`} />
                        <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2019/hashcode2019_8.jpg`} />
                    </AliceCarousel>
                </Grid>
            </Grid>
        </Container>
        </div>


        <div className='hashCodeSection'>
        <Container>
            <Typography className='hashCodeTitle'>
                HashCode 2018
            </Typography>
            <Typography className='hashCodeSponsors'>
                Sponsored by IEEE CAS and amper AXP
            </Typography>
            <Grid container spacing={3} style={{marginTop: 20}} justify="center">
                <Grid item xs={12} sm={4}>
                    <img style={{width:"95%"}} src={`${process.env.ASSET_PREFIX}/images/events/hashcode/HashCode2018.jpg`}/>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2018/Copy of IMG_20181104_135244.jpg`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2018/IMG_20181104_071741.jpg`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2018/IMG_20181104_123648.jpg`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2018/IMG_20181103_200317625.jpg`} />
                    </AliceCarousel>
                </Grid>                
            </Grid>
        </Container>
        </div>


        <div className='hashCodeSection'>
        <Container>
            <Typography className='hashCodeTitle'>
                HashCode 2017
            </Typography>
            <Typography className='hashCodeSponsors'>
                Sponsored by RedBull and HackerEarth
            </Typography>
            <Grid container spacing={3} style={{marginTop: 20}} justify="center">
                <Grid item xs={12} sm={4}>
                    <img style={{width:"95%"}} src={`${process.env.ASSET_PREFIX}/images/events/hashcode/HashCode2017.jpg`}/>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2017/HashCode2017_1.jpg`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2017/HashCode2017_2.jpg`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2017/HashCode2017_3.jpg`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2017/HashCode2017_4.jpg`} />
                    </AliceCarousel>
                </Grid>
            </Grid>
        </Container>
        </div>

        <div className='hashCodeSection'>
        <Container>
            <Typography className='hashCodeTitle'>
                HashCode 2016
            </Typography>
            <Typography className='hashCodeSponsors'>
                Sponsored by Itie and HackerEarth
            </Typography>
            <Grid container spacing={3} style={{marginTop: 20}} justify="center">
                <Grid item xs={12} sm={4}>
                    <img style={{width:"95%"}} src={`${process.env.ASSET_PREFIX}/images/events/hashcode/HashCode2016.jpg`}/>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2016/DSCN5078.JPG`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2016/Copy of DSCN4888.JPG`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2016/DSCN4891.JPG`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2016/DSCN4987.JPG`} />
                            <CarouselImage img={`${process.env.ASSET_PREFIX}/images/events/hashcode/2016/DSCN5007.JPG`} />
                    </AliceCarousel>
                </Grid>
            </Grid>
        </Container>
        </div>
                                            
        </div>
    </Layout>
    );
}
export default HashCode;