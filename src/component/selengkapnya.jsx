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
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  card: {
      padding: theme.spacing(3, 2),
    maxWidth: '100%',
    textAlign: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  andria: {
      marginTop: 0,
    width: 300,
      backgroundColor: '#f53855',
      marginBottom: 8,
      color: '#fff',
      borderRadius: 50,
      fontSize: 12,
      marginBottom: 50,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  bawahnya: {
      marginTop:50,
      marginBottom:60,
  }

}));

 function SLKP() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
        <Typography variant="body2" color="black" component="h5">
          Selengkapnya
        </Typography>
      <CardActions disableSpacing>
        <Typography className={classes.bawahnya} variant="body" component="h3">
          Ambil bagian untuk menghijaukan kembali Indonesia
        </Typography>
      </CardActions>
      <Button variant="contained" color="inherit" className={classes.andria}>
        <FavoriteIcon />
          Donasi
          
      </Button>
          </Card>
  );
}
export default SLKP;