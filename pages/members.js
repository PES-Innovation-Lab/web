// pages/members.js
import Layout from "../components/Layout";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import fetch from 'isomorphic-unfetch';

const AccStyles = makeStyles((theme) => ({
    heading: {
      fontSize: "2rem",
      color:"green",
      fontFamily: "Red Hat Display, sans-serif",
    },
    card_root: {
        maxWidth: 345,
      },
    card_media: {
        height: 140,
    },
  }));

function Members({members}){
    const accStyles = AccStyles();
    return(
    <Layout title={'PIL | Members'} active={'Members'}>
        <Typography style={{color:"green", fontFamily:"Red Hat Display, sans-serif", textAlign:"center", fontSize:"3rem"}}>
            Members
        </Typography>
        <Container>
                {
                    members.map((item) => //each item is the data for one year
                        <Container>
                            <Typography className={accStyles.heading}>
                                {item.key}
                            </Typography>
                            <Grid container spacing={3}>
                                {
                                    item.data.members.map((member)=> //each member is one member
                                        <Grid item xs={3}>
                                            <Card className={accStyles.card_root}>
                                                <CardActionArea>
                                                    <CardMedia
                                                    className={accStyles.card_media}
                                                    image={member.picture_url}
                                                    title={member.name}
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {member.name}
                                                    </Typography>
                                                    <Typography variant="h6" color="textSecondary" component="p">
                                                        {member.branch}-{member.grad_batch}   
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    {member.linkedin}
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                    {member.email}
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                    {member.github}
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Container>
                    )
                }
            </Container>
    </Layout>
    );
}

export async function getServerSideProps(context){
    const res = await fetch("https://pil-api.herokuapp.com/members");
    const output = await res.json();
    let members = [];
    for (let key in output){
        members.push({key:key,data:output[key]});
    }
    console.log(members);
    return {props:{members}};
}

export default Members;