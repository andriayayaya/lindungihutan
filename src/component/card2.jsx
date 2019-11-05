import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import gambar from '../image/hutan.png';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    backgroundImage:`url(${gambar})`,
    color: "white",
  },
  grid: {
    flexGrow: 1,
    textAlign: 'center',
    height: 100,
    color: 'white',
  }
});

 function ImgCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="body" component="p">
            
        LindungiHutan adalah platform crowdplanting penggalangan dana online untuk konservasi hutan dan lingkungan.

          </Typography>
          <div className={classes.grid}>
            <Grid container spacing={3}>
            <Grid item xs={6} xs={3}>
            <h2>755.0Jt</h2>
            Donasi
            Alam
            </Grid>
            <Grid item xs={6} xs={3}>
            <h2>74.2k</h2>
            Pohon
            Tertanam
            </Grid>
            <Grid item xs={6} xs={3}>
            <h2>14.2k</h2>
            Sahabat
            Alam
            </Grid>
            <Grid item xs={6} xs={3}>
            <h2>317</h2>
            Kampanye
            Alam
            </Grid>
            </Grid>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
export default ImgCard;