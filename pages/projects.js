// pages/projects.js
import Layout from "../components/Layout";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent,
         CardMedia, Dialog, AppBar, Toolbar, IconButton,
         Slide, Chip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ReactMarkdown from "react-markdown";
import {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/projects.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const designStyles = makeStyles({
    heading_style: {
        fontSize : "2rem",
    },
    spinner_text_style: {
        textAlign:"center",
        color:"#7cb342",
    }
});

function Projects() {
    const [data, setData] = useState({ "projects" :[]});
    const [isDataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        const fetchData = async() =>{
            const result = await fetch("https://pil-api.herokuapp.com/projects");
            if (await result.status != 200){
                alert("API Error. Try again later");
            }else{
                const output = await result.json();
                let projects = [];
                for (let key in output){
                    for (let chipKey in output[key].projects){
                        output[key].projects[chipKey].keywords = output[key].projects[chipKey].keywords.split(",");
                        output[key].projects[chipKey].interns = output[key].projects[chipKey].interns.split(",");
                        output[key].projects[chipKey].mentors = output[key].projects[chipKey].mentors.split(",");
                    }
                    projects.push({key:key,data:output[key]});
                }
                projects.reverse();
                setData({"projects": projects});
            }
            setDataLoaded(true);
        }
        fetchData();
    }, []);

    const [open, setOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState({"keywords":[],"interns":[], "mentors":[]});
    const designstyles = designStyles();
    const viewProject = (project) => {
        setSelectedProject(project);
        setOpen(true);
    }

    return(
        <Layout title={'PIL | Projects'} active={'Projects'} search={true} searchSettings={{targetClass: 'projectCardContainer', default: 'block'}}>
            <Typography className='pageHeader'>
                Projects
            </Typography>
            <Typography style={{color: "white", fontSize:"2rem", textAlign:"center"}}>
                Click on a project to learn more
            </Typography>
            <Container>
                { !isDataLoaded ? <div className={designstyles.spinner_text_style}><Typography style={{fontSize: "1.5rem"}}>Loading Data</Typography> <CircularProgress style={{"color":"#7cb342", marginTop: "1em"}} /></div> : data.projects.map((item) => //each item is the data for one year
                    <Container>
                        <Typography className='pageSubHeader'>
                            {item.key}
                        </Typography>
                        <Grid container spacing={3}>
                            {item.data.projects.map((project)=> //each project is one project
                                <Grid item sm={4} className='projectCardContainer'>
                                    <Card className='projectCard' onClick={() => {viewProject(project)}}>
                                        <CardActionArea>
                                            <CardMedia
                                                className='projectCardImage'
                                                image={project.poster_url || `${process.env.ASSET_PREFIX}/images/mlab/no_project_image.png`}
                                                title={project.title}
                                            />
                                            <CardContent>
                                                <Typography className='projectCardTitle' gutterBottom variant="h5" component="h2">
                                                    {project.title}
                                                </Typography>
                                                <Typography className='projectCardDescription'>
                                                    {project.short_description}
                                                </Typography>
                                                {project.keywords.map((item) => 
                                                    <Chip
                                                        label={item}
                                                        className='projectKeywordChip'
                                                    >
                                                    </Chip>
                                                )}                                                
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )}
                        </Grid>
                    </Container>
                )}
            </Container>
            <Dialog fullScreen open={open} onClose={() => {setOpen(false)}} TransitionComponent={Transition}>
                <AppBar className='dialogAppBar'>
                <Toolbar>
                    <Typography variant="h6" className='dialogTitle'>
                        {selectedProject.title}
                    </Typography>
                    <IconButton edge="start" color="inherit" onClick={() => {setOpen(false)}}>
                        <CloseIcon style={{float: 'right', color: '#8bc34a'}}/>
                    </IconButton>
                </Toolbar>
                </AppBar>
                <div className='projectViewContainer'>
                    <div className='projectViewSectionText'>
                        <ReactMarkdown source={selectedProject.long_description}>
                        </ReactMarkdown>
                        <Typography className={designstyles.heading_style}>
                            Domains:
                        </Typography>
                        {
                            selectedProject.keywords.map((keyword)=>
                                <Chip
                                    label={keyword}
                                    className="projectKeywordChip"
                                >
                                </Chip>
                            )
                        }
                        <Typography className={designstyles.heading_style} style={{marginTop:"1em"}}>
                            Interns:
                        </Typography>
                        {
                            selectedProject.interns.map((intern)=>
                                <Chip
                                    label={intern}
                                    color="primary"
                                    style={{fontSize:"1rem", marginRight:"0.5em"}}
                                >
                                </Chip>
                            )
                        }
                        <Typography className={designstyles.heading_style} style={{marginTop:"1em"}}>
                            Mentors:
                        </Typography>
                        {
                            selectedProject.mentors.map((mentor)=>
                                <Chip
                                    label={mentor}
                                    color="secondary"
                                    style={{fontSize:"1rem", marginRight:"0.5em"}}
                                >
                                </Chip>
                            )
                        }
                    </div>
                    <div className='projectViewSectionImage'>
                        <img style={{width:"95%"}} src={selectedProject.poster_url || `${process.env.ASSET_PREFIX}/images/mlab/no_project_image.png`}></img>
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