// components/NavBar.js
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo:{
        maxWidth: 160,
    },
    toolbarButtons: {
        marginLeft: "auto",
        color: "white",
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "green",
        },
    },
    logoButton: {
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "black",
        },
    },
  }));

function NavBar(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar position="static" style={{backgroundColor:"black",color:"white"}}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} style={{backgroundColor:"black", color:"white"}} aria-label="menu">
                <MenuIcon />
              </IconButton>
            <Link href="/">
              <IconButton edge="start" className={classes.logoButton} >
                    <img className={classes.logo} src="images/mlab/mlab_logo_icon.png"/>
              </IconButton>
            </Link>
        
            <Link href="/events"><Button className={classes.toolbarButtons}>Events</Button></Link>
            <Link href="/members"><Button className={classes.toolbarButtons}>Members</Button></Link>
            <Link href="/projects"><Button className={classes.toolbarButtons}>Projects</Button></Link>
            <Link href="/hashcode"><Button className={classes.toolbarButtons}>Hashcode</Button></Link>

            </Toolbar>
          </AppBar>
        </div>
      );
}

export default NavBar;