import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Layout from '../components/Layout';

import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// import '../css/hashCode.css';
import articlesData from '../public/data/articles.json';

const designstyles = makeStyles({
  gridList: {
    width: '70%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  spinnerTextStyle: {
    textAlign: 'center',
    color: '#7cb342',
  },
  subtitleStyle: {
    fontSize: '1.5rem',
    color: 'white',
    textAlign: 'center',
  },
});

function articles() {
  const styles = designstyles();
  const [data, setData] = useState({ articles: [] });
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const setDialog = (url) => {
    console.log(url);
    setSelectedImage(url);
    setOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      // const result = await fetch('https://api-vercel-mlabwebdev.vercel.app/articles');
      const result = await fetch('/data/articles.json');
      if ((await result.status) !== 200) {
        alert('API Error. Try again later');
      } else {
        const articles = await result.json();
        setData({ articles: articles });
      }
      setDataLoaded(true);
    };
    // fetchData();

    const fetch = () => {
      const articles = articlesData;
      setData({ articles: articles });
      setDataLoaded(true);
    };
    fetch();
  }, []);
  return (
    <Layout title={'PIL | Articles'}>
      <div className="hashCodeHeadSection">
        <Container>
          <Typography className="pageHeader">
            PES Innovation Lab in the news
          </Typography>
          <Typography className={styles.subtitleStyle}>
            A collection of media articles about us
          </Typography>
          <Typography
            className={styles.subtitleStyle}
            style={{ marginTop: 40 }}
          >
            Click an article to read more
          </Typography>
        </Container>
      </div>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {!isDataLoaded ? (
          <div className={styles.spinnerTextStyle}>
            <Typography style={{ fontSize: '1.5rem' }}>Loading Data</Typography>{' '}
            <CircularProgress style={{ color: '#7cb342', marginTop: '1em' }} />
          </div>
        ) : (
          <GridList cellHeight={400} className={styles.gridList}>
            {data.articles.map((article) => (
              <GridListTile
                key={article.thumbnail_link}
                onClick={() => setDialog(article.image_link)}
              >
                <img src={article.thumbnail_link} alt={article.article_name} />
                <GridListTileBar
                  title={article.article_name}
                  subtitle={article.article_date}
                  actionIcon={
                    <IconButton
                      aria-label={'Read more ... '}
                      className={styles.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        )}
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <InnerImageZoom src={selectedImage} zoomScale={6} />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Layout>
  );
}

export default articles;
