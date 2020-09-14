// pages/members.js
import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import { Card, CardActionArea, CardActions, 
         CardContent, CardMedia, Typography,
         Container, Grid, IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Members({ members }) {
    return (
    <Layout title={'PIL | Members'} active={'Members'} search={true} searchSettings={{ targetClass: 'memberCardContainer', default: 'block'}}>
        <Typography className={'pageHeader'}>
            Members
        </Typography>
        <Container>
            {members.map((item) => //each item is the data for one year
                <Container>
                    <Typography className={'pageSubHeader'}>
                        {item.key}
                    </Typography>
                    <Grid container spacing={3}>
                        {item.data.members.map((member)=> //each member is one member
                            <Grid item sm={3} className='memberCardContainer'>
                                <Card className={'memberCard'}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={'memberCardImage'}
                                            image={member.picture_url || './images/members/unknown.png'}
                                            title={member.name}
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" className='memberCardTitle'>
                                            {member.name}
                                        </Typography>
                                        <Typography className='memberCardDescription'>
                                            {member.branch} | {member.grad_batch}   
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container>
                                            <Grid item xs={4} style={{textAlign: 'center'}}>
                                                <a href={member.linkedin} target='_blank'>
                                                    <IconButton><LinkedInIcon className='memberCardSocialIcons'/></IconButton>
                                                </a>
                                            </Grid>
                                            <Grid item xs={4} style={{textAlign: 'center'}}>
                                                <a href={`mailto:${member.email}`}>
                                                    <IconButton><EmailIcon className='memberCardSocialIcons'/></IconButton>
                                                </a>
                                            </Grid>
                                            <Grid item xs={4} style={{textAlign: 'center'}}>
                                                <a href={member.github} target='_blank'>
                                                    <IconButton><GitHubIcon className='memberCardSocialIcons'/></IconButton>
                                                </a>
                                            </Grid>
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            )}
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
    members.reverse();
    return {props:{members}};
}

export default Members;