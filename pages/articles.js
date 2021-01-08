import Layout from "../components/Layout";
import { Container, Typography } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Dialog, DialogActions, DialogContent, Button } from '@material-ui/core';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import {useEffect, useState} from 'react';
import '../css/hashCode.css';

const designstyles = makeStyles({
    gridList: {
        width: '70%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    spinner_text_style: {
        textAlign:"center",
        color:"#7cb342",
    },
    subtitle_style: {
        fontSize : "1.5rem",
        color: "white",
        textAlign: "center",        
    },
});

function articles() {
    const styles = designstyles();
    const [data, setData] = useState({ "articles" :[]});
    const [isDataLoaded, setDataLoaded] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    
    const setDialog = (url) => {
      console.log(url);
      setSelectedImage(url);
      setOpen(true);
    }

    useEffect(() => {
        const fetchData = async() =>{
            const result = await fetch("https://pil-api.herokuapp.com/articles");
            if (await result.status != 200){
                alert("API Error. Try again later");
            }else{
                let articles = await result.json();
                setData({"articles": articles});
            }
            setDataLoaded(true);
        }
        fetchData();
    }, []);
  return (
    <Layout title={"PIL | Articles"}>
        <div className='hashCodeHeadSection'>
          <Container>
              <Typography className='pageHeader'>
                  PES Innovation Lab in the news
              </Typography>
              <Typography className={styles.subtitle_style}>
                  A collection of media articles about us
              </Typography>
              <Typography className={styles.subtitle_style} style={{marginTop: 40}}>
                  Click an article to read more
              </Typography>
          </Container>
        </div>        
      <Container style={{display:"flex",justifyContent: "center", alignItems: "center"}}>
           { !isDataLoaded ? <div className={styles.spinner_text_style}><Typography style={{fontSize: "1.5rem"}}>Loading Data</Typography> <CircularProgress style={{"color":"#7cb342", marginTop: "1em"}} /></div> :
               <GridList cellHeight={400} className={styles.gridList} >
               {data.articles.map((article) => (
                 <GridListTile key={article.thumbnail_link} onClick={() => setDialog(article.image_link)}>
                   <img src={article.thumbnail_link} alt={article.article_name} />
                   <GridListTileBar
                     title={article.article_name}
                     subtitle={article.article_date}
                     actionIcon={
                       <IconButton aria-label={`Read more ... `} className={styles.icon}>
                         <InfoIcon />
                       </IconButton>
                     }
                   />
                 </GridListTile>
               ))}
             </GridList>
           }
          <Dialog
            open={open}
            onClose={() => {setOpen(false)}}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >            
            <DialogContent>
              <InnerImageZoom src={selectedImage} zoomScale={6} />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => {setOpen(false)}} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
      </Container>
    </Layout>
  );
}

export default articles;
