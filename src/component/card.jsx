import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import gambar from '../image/icon.png';
import Buttons from '../component/buttons';

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    textAlign:'center',
    alignItems:'center',
    fontSize:12,
  },
  media: {
    height: 140,
  },
  gambar:{
    marginTop:75,
    marginLeft:30,
    marginRight:30,
  },
});

function Cardds() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <img className={classes.gambar} src={gambar} width="75%" height="180px" />
        <CardContent>
          <Typography gutterBottom variant="body" component="h2">
            Hal sederhana,jadi lebih bermakna
            bersama lindungiHutan.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Buat Aksi penanaman dan lingkungan dengan mudah, aman dan transparant. Mulai Tanam 
          </Typography>
          <Buttons />
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
export default Cardds;