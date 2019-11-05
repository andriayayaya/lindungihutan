import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
    background: 'linear-gradient(#045f50, rgba(16, 186, 158, 1))',
    borderRadius: '30px 30px',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    color: 'white',
  },
  media: {
    height: 0,
    paddingTop: '25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform'), 
      duration: theme.transitions.duration.shortest,
  
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  alam: {
    textAlign: 'center',
  },

  button1: {
    margin: theme.spacing(1),
    backgroundColor: "green",
    borderRadius: "50px",
    width: "90%",
    height: "80%",
    marginLeft:22,
  }
  // avatar: {
  //   backgroundColor: red[500],
 }) // },
)

function CardYo() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/image/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          />
      <CardContent>
        <Typography className={classes.alam} gutterBottom variant="body" component="h1">
            <strong>
                Kampanye Alam
            </strong>
        </Typography>
        <Typography variant="body2" color="white" component="h5" textAlign="center">
        Mulai kampanye Alam pertamamu, buat gerakan penanaman atau aksi lingkungan dengan mudah, aman dan transparan.
        </Typography>
    </CardContent>
        <CardActions>
            <Button variant="contained" color="inherit" className={classes.button1}>
                <strong>
                    Buat kampanye alam
                </strong>
            </Button>
        </CardActions>
        
        </Card>
        
        );
}
export default CardYo;