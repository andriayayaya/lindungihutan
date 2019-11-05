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

const useStyles = makeStyles(theme => ({
//    card: {
//    marginLeft: 10,
//  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    marginLeft: 15,
  },
  content: {
    flex: '1 0 auto',
    marginTop: -120,
    marginLeft: 180,
  },
  cover: {
    width: '50%',
    height: 100,
    marginTop:35,
    marginLeft: 15,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  bawahnya: {
    marginLeft: 50,
    marginTop:20,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function MediaControlCards() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
        <Typography className={classes.bawahnya} variant="p" component="h3">
          Tanam pohon dimana hari ini?
        </Typography>
      <CardMedia
        className={classes.cover}
        image={require('../image/kayu.png')}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="body" variant="p">
          From Hwang Yunseong For Earth
          </Typography>
        </CardContent>
        
      </div>
    </Card>
  );
}


export default MediaControlCards;