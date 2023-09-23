// pages/members.js
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import membersData from '../public/data/members.json';

const designStyles = makeStyles({
  spinnerTextStyle: {
    textAlign: 'center',
    color: '#7cb342',
  },
});

function Members() {
  const [data, setData] = useState({ members: [] });
  const [isDataLoaded, setDataLoaded] = useState(false);
  const designstyles = designStyles();
  useEffect(() => {
    const fetchData = async () => {
      // const result = await fetch('https://api-vercel-mlabwebdev.vercel.app/members');
      // const result = await fetch('/data/members.json');
      if ((await result.status) !== 200) {
        alert('API Error. Try again later');
      } else {
        const output = await result.json();
        const members = [];
        for (const key in output) {
          members.push({ key: key, data: output[key] });
        }
        members.reverse();
        setData({ members: members });
      }
      setDataLoaded(true);
    };
    // fetchData();

    const fetch = () => {
      const output = membersData;
      const members = [];
      for (const key in output) {
        members.push({ key: key, data: output[key] });
      }
      members.reverse();
      setData({ members: members });
      setDataLoaded(true);
    };
    fetch();
  }, []);

  return (
    <Layout
      title={'PIL | Members'}
      active={'Members'}
      search={true}
      searchSettings={{ targetClass: 'memberCardContainer', default: 'block' }}
    >
      <Typography className="pageHeader">Members</Typography>
      <Container>
        {!isDataLoaded ? (
          <div className={designstyles.spinnerTextStyle}>
            <Typography style={{ fontSize: '1.5rem' }}>Loading Data</Typography>{' '}
            <CircularProgress style={{ color: '#7cb342', marginTop: '1em' }} />
          </div>
        ) : (
          data.members.map(
            (
              item // each item is the data for one year
            ) => (
              <Container key={item.key}>
                <Typography className="pageSubHeader">{item.key}</Typography>
                <Grid container spacing={3} justifyContent="center">
                  {item.data.members.map(
                    (
                      member // each member is one member
                    ) => (
                      <Grid
                        key={member.name}
                        item
                        sm={3}
                        className="memberCardContainer"
                      >
                        <Card className="memberCard">
                          <CardActionArea>
                            <CardMedia
                              className="memberCardImage"
                              component="img"
                              image={
                                member.picture_url ||
                                './images/members/unknown.png'
                              }
                              title={member.name}
                              loading="lazy"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                className="memberCardTitle"
                              >
                                {member.name}
                              </Typography>
                              <Typography className="memberCardDescription">
                                {member.branch} | {member.grad_batch}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Grid container>
                              <Grid item xs={4} style={{ textAlign: 'center' }}>
                                <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <IconButton>
                                    <LinkedInIcon className="memberCardSocialIcons" />
                                  </IconButton>
                                </a>
                              </Grid>
                              <Grid item xs={4} style={{ textAlign: 'center' }}>
                                <a href={`mailto:${member.email}`}>
                                  <IconButton>
                                    <EmailIcon className="memberCardSocialIcons" />
                                  </IconButton>
                                </a>
                              </Grid>
                              <Grid item xs={4} style={{ textAlign: 'center' }}>
                                <a
                                  href={member.github}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <IconButton>
                                    <GitHubIcon className="memberCardSocialIcons" />
                                  </IconButton>
                                </a>
                              </Grid>
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    )
                  )}
                </Grid>
              </Container>
            )
          )
        )}
      </Container>
    </Layout>
  );
}

// export async function getServerSideProps(context){
//     const res = await fetch("https://api-vercel-mlabwebdev.vercel.app/members");
//     const output = await res.json();
//     let members = [];
//     for (let key in output){
//         members.push({key:key,data:output[key]});
//     }
//     members.reverse();
//     return {props:{members}};
// }

export default Members;
