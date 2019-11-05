import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Button } from '@material-ui/core';
import gambar from '../image/buntu.jpeg';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    maxHeight: 'auto',
    maxWidth: '100%',
    marginTop: 20,
    marginLeft: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  root:{
      maxWidth:'100%',
      maxHeight:'100%'
  },
  button:{
      marginTop:20,
      width:300,
      fontSiza:5,
      borderRadius:50,
      marginLeft:35,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function Cari() {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <div className={classes.root}>
          <Button variant="outlined" color="inherit" className={classes.button}>
              cari kampanye
          </Button>

    <Card className={classes.card}>
    <img src={gambar} width="50%" height="130px" alt="" />
    <div className={classes.details}>
      <div className={classes.details}>
          <CardContent className={classes.component}>
              <Typography component="body" variant="p">
              Bantu Yogyakarta Hadapi Abrasi di Pesisir Pantai
              </Typography>
          </CardContent>
      </div>
      </div>
    </Card>
    </div>
  );
}


export default Cari;