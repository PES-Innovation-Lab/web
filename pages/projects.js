// pages/projects.js
import Layout from "../components/Layout";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent,
         CardMedia, Dialog, AppBar, Toolbar, IconButton,
         Slide, Chip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

  
function Projects({ projects }) {
    const [open, setOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState({});

    const viewProject = (project) => {
        setSelectedProject(project);
        setOpen(true);
    }

    return(
        <Layout title={'PIL | Projects'} active={'Projects'}>
            <Typography className='pageHeader'>
                Projects
            </Typography>
            <Container>
                {projects.map((item) => //each item is the data for one year
                    <Container>
                        <Typography className='pageSubHeader'>
                            {item.key}
                        </Typography>
                        <Grid container spacing={3}>
                            {item.data.projects.map((project)=> //each project is one project
                                <Grid item sm={4}>
                                    <Card className='projectCard' onClick={() => {viewProject(project)}}>
                                        <CardActionArea>
                                            <CardMedia
                                                className='projectCardImage'
                                                image={project.poster_url || './images/mlab/no_project_image.png'}
                                                title={project.title}
                                            />
                                            <CardContent>
                                                <Typography className='projectCardTitle' gutterBottom variant="h5" component="h2">
                                                    {project.title}
                                                </Typography>
                                                <Typography className='projectCardDescription'>
                                                    {project.description}
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
                <AppBar className='projectDialogAppBar'>
                <Toolbar>
                    <Typography variant="h6" className='projectDialogTitle'>
                        {selectedProject.title}
                    </Typography>
                    <IconButton edge="start" color="inherit" onClick={() => {setOpen(false)}}>
                        <CloseIcon style={{float: 'right', color: '#8bc34a'}}/>
                    </IconButton>
                </Toolbar>
                </AppBar>   
            </Dialog>
        </Layout>
    );
}

export async function getServerSideProps(context){
    const res = await fetch("https://pil-api.herokuapp.com/projects");
    const output = await res.json();
    let projects = [];
    for (let key in output){
        for (let chipKey in output[key].projects){
            output[key].projects[chipKey].keywords = output[key].projects[chipKey].keywords.split(",");
        }
        projects.push({key:key,data:output[key]});
    }
    return {props:{projects}};
}

export default Projects;