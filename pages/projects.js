// pages/projects.js
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
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';

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
        height: 500,
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

  
function Projects({projects}){
    const accStyles = AccStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <Layout title={'PIL | Projects'} active={'Projects'}>
            <Typography style={{color:"green", fontFamily:"Red Hat Display, sans-serif", textAlign:"center", fontSize:"3rem"}}>
            Projects
            </Typography>
            <Container>
                {
                    projects.map((item) => //each item is the data for one year
                        <Container>
                            <Typography className={accStyles.heading}>
                                {item.key}
                            </Typography>
                            <Grid container spacing={3}>
                                {
                                    item.data.projects.map((project)=> //each project is one project
                                        <Grid item xs={4}>
                                            <Card className={accStyles.card_root} onClick={handleClickOpen}>
                                                <CardActionArea>
                                                    <CardMedia
                                                    className={accStyles.card_media}
                                                    image={project.poster_url}
                                                    title={project.title}
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {project.title}
                                                    </Typography>
                                                    <Typography variant="h6" color="textSecondary" component="p">
                                                        {project.description}
                                                    </Typography>
                                                    <div>
                                                    {
                                                        project.keywords.map((item) => 
                                                            <Chip
                                                                label={item}
                                                                className={accStyles.chip}
                                                            >
                                                            </Chip>
                                                        )
                                                    }
                                                    </div>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Container>
                    )
                }
            </Container>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={accStyles.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={accStyles.title}>
                        Title
                    </Typography>
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
    console.log(projects[0].data.projects[0].keywords);
    return {props:{projects}};
}

export default Projects;