// pages/projects.js
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Chip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ReactMarkdown from 'react-markdown';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/projects.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const designStyles = makeStyles({
  headingStyle: {
    fontSize: '2rem',
  },
  spinnerTextStyle: {
    textAlign: 'center',
    color: '#7cb342',
  },
  linkStyle: {
    textDecoration: 'none',
  },
});

const useStickyState = (defaultValue, key) => {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function Projects() {
  const [data, setData] = useState({ projects: [] });
  const [open, setOpen] = React.useState(false);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [isProjectFromURL, setIsProjectFromURL] = useState(true);

  const [uniqueCode, setUniqueCode] = useStickyState("", "uq5");
  const viewProject = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };




  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://pil-api.herokuapp.com/projects');
      if ((await result.status) !== 200) {
        alert('API Error. Try again later');
      } else {
        const output = await result.json();
        const projects = [];
        for (const key in output) {
          for (const chipKey in output[key].projects) {
            output[key].projects[chipKey].keywords = output[key].projects[
              chipKey
            ].keywords.split(',');
            output[key].projects[chipKey].interns = output[key].projects[
              chipKey
            ].interns.split(',');
            output[key].projects[chipKey].mentors = output[key].projects[
              chipKey
            ].mentors.split(',');
            output[key].projects[chipKey].id = output[key].projects[
              chipKey
            ].title
              .replace(/\s+/g, '-')
              .toLowerCase();
          }
          projects.push({ key: key, data: output[key] });
        }
        projects.reverse();
        setData({ projects: projects });
      }
      setDataLoaded(true);
    };
    fetchData();
  }, []);

  const checkProjectHashString = () => {
    if (!data.projects.length) return;
    const projectId = window.location.hash.substring(1);

    let project;

    data.projects.forEach((item) => {
      item.data.projects.forEach((proj) => {
        if (proj.id === projectId) project = proj;
      });
    });

    if (project) viewProject(project);
    else if (isDataLoaded) setOpen(false);
  };

  useEffect(() => {
    if (isDataLoaded)
      window.addEventListener('hashchange', checkProjectHashString, false);
  }, [isDataLoaded]);

  useEffect(() => {
    checkProjectHashString();
  }, [data]);

  useEffect(() => {
    if (isDataLoaded && !open) {
      setSelectedProject({ keywords: [], interns: [], mentors: [] });
      window.location.hash = '';
    }
    checkProjectHashString();
  }, [open]);

  const [selectedProject, setSelectedProject] = React.useState({
    keywords: [],
    interns: [],
    mentors: [],
  });
  const designstyles = designStyles();

  return (
    <Layout
      title={'PIL | Projects'}
      active={'Projects'}
      search={true}
      searchSettings={{ targetClass: 'projectCardContainer', default: 'block' }}
    >
      <Typography className="pageHeader">Projects</Typography>
      <Typography
        style={{ color: 'white', fontSize: '2rem', textAlign: 'center' }}
      >
        Click on a project to learn more
      </Typography>

      <Container>
        {!isDataLoaded ? (
          <div className={designstyles.spinnerTextStyle}>
            <Typography style={{ fontSize: '1.5rem' }}>Loading Data</Typography>{' '}
            <CircularProgress style={{ color: '#7cb342', marginTop: '1em' }} />
          </div>
        ) : (
          data.projects.map((
            item // each item is the data for one year
          ) => (
            <Container key={item.key}>
              <Typography className="pageSubHeader">{item.key}</Typography>
              <Grid container spacing={3}>
                {item.data.projects.map((
                  project // each project is one project
                ) => (
                  <Grid
                    key={project.title}
                    id={project.id}
                    item
                    sm={4}
                    className="projectCardContainer"
                  >
                    <a
                      onClick={() => {
                        
                        setIsProjectFromURL(false)
                      }}
                      href={uniqueCode.length > 0 && project.id == 'neural-music' ? 'https://youtu.be/3ROQ8WSzByc' : '#' + project.id}
                      className={designstyles.linkStyle}
                    >
                      <Card className="projectCard">
                        <CardActionArea>
                          <CardMedia
                            className="projectCardImage"
                            component="img"
                            image={
                              project.poster_url ||
                              `${process.env.ASSET_PREFIX}/images/mlab/no_project_image.png`
                            }
                            title={project.title}
                          />
                          <CardContent>
                            <Typography
                              className="projectCardTitle"
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {project.title}
                            </Typography>
                            <Typography className="projectCardDescription">
                              {project.short_description}
                            </Typography>
                            {project.keywords.map((item) => (
                              <Chip
                                key={item}
                                label={item}
                                className="projectKeywordChip"
                              ></Chip>
                            ))}
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Container>
          ))
        )}
      </Container>
      <Dialog
        fullScreen
        open={open}
        onClose={() => (isProjectFromURL ? setOpen(false) : history.back())}
        TransitionComponent={Transition}
      >
        <AppBar className="dialogAppBar">
          <Toolbar>
            <Typography variant="h6" className="dialogTitle">
              {selectedProject.title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() =>
                isProjectFromURL ? setOpen(false) : history.back()
              }
            >
              <CloseIcon style={{ float: 'right', color: '#8bc34a' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="projectViewContainer">
          <div className="projectViewSectionText">
            <ReactMarkdown
              source={selectedProject.long_description}
            ></ReactMarkdown>
            <Typography className={designstyles.headingStyle}>
              Domains:
            </Typography>
            {selectedProject.keywords.map((keyword) => (
              <Chip
                key={keyword}
                label={keyword}
                className="projectKeywordChip"
                style={{
                  fontSize: '1rem',
                  marginRight: '0.5em',
                  marginTop: '0.5em',
                }}
              ></Chip>
            ))}
            <Typography
              className={designstyles.headingStyle}
              style={{ marginTop: '1em' }}
            >
              Interns:
            </Typography>
            {selectedProject.interns.map((intern) => (
              <Chip
                key={intern}
                label={intern}
                color="primary"
                style={{
                  fontSize: '1rem',
                  marginRight: '0.5em',
                  marginTop: '0.5em',
                }}
              ></Chip>
            ))}
            <Typography
              className={designstyles.headingStyle}
              style={{ marginTop: '1em' }}
            >
              Mentors:
            </Typography>
            {selectedProject.mentors.map((mentor) => (
              <Chip
                key={mentor}
                label={mentor}
                color="secondary"
                style={{
                  fontSize: '1rem',
                  marginRight: '0.5em',
                  marginTop: '0.5em',
                }}
              ></Chip>
            ))}
          </div>
          <div className="projectViewSectionImage">
            <img
              style={{ width: '95%' }}
              src={
                selectedProject.poster_url ||
                `${process.env.ASSET_PREFIX}/images/mlab/no_project_image.png`
              }
            ></img>
          </div>
        </div>
      </Dialog>
    </Layout>
  );
}

// export async function getServerSideProps(context){
//     const res = await fetch("https://pil-api.herokuapp.com/projects");
//     const output = await res.json();
//     let projects = [];
//     for (let key in output){
//         for (let chipKey in output[key].projects){
//             output[key].projects[chipKey].keywords = output[key].projects[chipKey].keywords.split(",");
//             output[key].projects[chipKey].interns = output[key].projects[chipKey].interns.split(",");
//             output[key].projects[chipKey].mentors = output[key].projects[chipKey].mentors.split(",");
//         }
//         projects.push({key:key,data:output[key]});
//     }
//     projects.reverse();
//     return {props:{projects}};
// }

export default Projects;
