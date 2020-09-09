// pages/index.js
import NavBar from "../components/NavBar";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main_title:{
        fontFamily:'Poppins, sans-serif',
        textAlign: "center",
        fontSize: '5rem',
        color: '#7cb342',
    },
    main_content:{
        fontFamily:'Red Hat Display, sans-serif',
        fontSize: '2rem',
        color: 'white',
    }        
}));

class Index extends React.Component{
    componentDidMount(){
        document.body.style.backgroundImage="/images/mlab/prism.png";
        document.body.style.backgroundRepeat="repeat";
    }
    render(){
        return(
            <>
            <NavBar />
            <div>
                <p className={useStyles.main_title}>PES Innovation Lab</p>
            </div>
            <blockquote className={useStyles.main_content} style={{align:"center"}}>
                We are a student community dedicated to cultivating the spirit of research and innovation in budding
                engineers.
            </blockquote>
            </>
        );
    }
}

export default Index;