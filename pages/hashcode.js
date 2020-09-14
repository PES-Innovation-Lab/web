// pages/hashcode.js
import Layout from "../components/Layout";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid } from "@material-ui/core";
import AliceCarousel from 'react-alice-carousel';

const designstyles = makeStyles({
    title_style: {
        fontSize : "4rem",
        fontFamily: "Changa, sans-serif",
        color: "#8bc34a",
        textAlign: "center",
        marginTop: "0.5em",
    },
    subtitle_style: {
        fontSize : "2rem",
        fontFamily: "Changa, sans-serif",
        color: "white",
        textAlign: "center",
        marginTop: "1em",
    },
    event_title_style: {
        fontSize : "2.5rem",
        fontFamily: "Changa, sans-serif",
        color: "#8bc34a",
        textAlign: "left",
        marginTop: "1em",
    },
    event_sponsor_style: {
        fontSize : "1.5rem",
        fontFamily: "Changa, sans-serif",
        color: "white",
        textAlign: "left",
    },
    event_body_style: {
        fontSize : "1.5rem",
        fontFamily: "Red Hat Display, sans-serif",
        color: "white",
        textAlign: "left",
        marginTop: "1em",
        marginBottom: "1em",
    },
});

function HashCode(){
    const styles = designstyles();

    return (
        <Layout title={'PIL | Hashcode'} active={'Hashcode'}>
            <Container maxWidth="lg">
                <Typography className={styles.title_style}>
                    HashCode
                </Typography>
                <Typography className={styles.subtitle_style}>
                    Hungry to Innovate? Grab a Byte.
                </Typography>
                <Typography className={styles.subtitle_style} style={{color:"white"}}>
                    HashCode is the annual 24-hour hackathon organised by the Lab, with students proposing interesting ideas and presenting projects from several domains. The hackathon also provides a learning platform to participating teams, with mentors and members of academia assisting them. Esteemed personalities from different industrial backgrounds come to judge the show, evaluating projects from all possible angles. HashCode 2019 would be the 8th edition of the annual hackathon. The winners bag cash prizes totalling up to Rs. one lakh.
                </Typography>
            </Container>
            <Container maxWidth="lg">
                <Container>
                    <Typography className={styles.event_title_style}>
                        HashCode 2020
                    </Typography>
                    <Typography className={styles.event_sponsor_style}>
                        Sponsored by: RedHat
                    </Typography>
                    <Typography className={styles.event_sponsor_style}>
                        More information coming soon!
                    </Typography>
                </Container>
                <Container>
                    <Typography className={styles.event_title_style}>
                        HashCode 2019
                    </Typography>
                    <Typography className={styles.event_sponsor_style}>
                        Sponsored by RedHat, IEEE CAS and Rotary Club
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Typography className={styles.event_body_style}>
                                Event Link: <a href="https://hashcode.hackerearth.com" style={{color:"#8bc34a"}}>https://hashcode.hackerearth.com</a>
                            </Typography>
                            <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                                    <img  src="/images/events/hashcode/2019/hashcode2019_1.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2019/hashcode2019_2.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2019/hashcode2019_3.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2019/hashcode2019_4.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2019/hashcode2019_5.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2019/hashcode2019_6.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2019/hashcode2019_7.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2019/hashcode2019_8.jpg" className={"sliderimg"}/>
                            </AliceCarousel>
                        </Grid>
                        <Grid item xs={4}>
                            <img style={{width:"95%"}} src="/images/events/hashcode/HashCode2019.jpg"/>
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Typography className={styles.event_title_style}>
                        HashCode 2018
                    </Typography>
                    <Typography className={styles.event_sponsor_style}>
                        Sponsored by IEEE CAS and amper AXP
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                                    <img  src="/images/events/hashcode/2018/Copy of IMG_20181104_135244.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2018/IMG_20181104_071741.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2018/IMG_20181104_123648.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2018/IMG_20181103_200317625.jpg" className={"sliderimg"}/>
                            </AliceCarousel>
                        </Grid>
                        <Grid item xs={4}>
                            <img style={{width:"95%"}} src="/images/events/hashcode/HashCode2018.jpg"/>
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Typography className={styles.event_title_style}>
                        HashCode 2017
                    </Typography>
                    <Typography className={styles.event_sponsor_style}>
                        Sponsored by RedBull and HackerEarth
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                                    <img  src="/images/events/hashcode/2017/HashCode2017_1.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2017/HashCode2017_2.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2017/HashCode2017_3.jpg" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2017/HashCode2017_4.jpg" className={"sliderimg"}/>
                            </AliceCarousel>
                        </Grid>
                        <Grid item xs={4}>
                            <img style={{width:"95%"}} src="/images/events/hashcode/HashCode2017.jpg"/>
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Typography className={styles.event_title_style}>
                        HashCode 2016
                    </Typography>
                    <Typography className={styles.event_sponsor_style}>
                        Sponsored by Itie and HackerEarth
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled>
                                    <img  src="/images/events/hashcode/2016/DSCN5078.JPG" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2016/Copy of DSCN4888.JPG" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2016/DSCN4891.JPG" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2016/DSCN4987.JPG" className={"sliderimg"}/>
                                    <img  src="/images/events/hashcode/2016/DSCN5007.JPG" className={"sliderimg"}/>
                            </AliceCarousel>
                        </Grid>
                        <Grid item xs={4}>
                            <img style={{width:"95%"}} src="/images/events/hashcode/HashCode2016.jpg"/>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Layout>
    );
}
export default HashCode;