import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import LetterAvatar from '../component/avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    background: 'linear-gradient(2.06deg, #7BE3FA -44%, #045F50 87.81%)',
    color: 'white',
    height:400,
  },
  aw: {
    textAlign: 'center',
    marginTop:40,
  },
  foot:{
    textAlign:'center',
  },
ew:{
  marginLeft:-240,
  marginTop:40,
},
Avatar: {
  background: '#0d47a1',
  marginLeft: 80,
  marginTop: -30,
},
tw: {
  background: '#448aff',
  marginLeft: 130,
  marginTop: -40,
},
sc: {
  borderRadius: '60px',
  marginLeft: 180,
  marginTop: -55,
  fontSize:11.5,
},

}));

function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
        <Grid container justify="center" alignItems="center">
            <Avatar alt="" src="andria/rere/eva" className={classes.kertas} />
        </Grid>
        <LetterAvatar />
        <div className={classes.aw}>
        <Typography variant="body" color="white" component="body"> 
        <h3>andria wijayanti</h3>
        </Typography>
        </div>
        <div className={classes.foot}>
        <Typography variant="body" color="white" component="p"> 
        Gabung Relawan Sekarang
        </Typography>
        <Typography className={classes.ew}variant="body" color="white" component="p"> 
        bagikan:
        </Typography>
        </div>
        <Avatar className={classes.Avatar}>
       <FacebookIcon />
      </Avatar>
      <Avatar className={classes.tw}>
       <TwitterIcon />
      </Avatar>
      <Button variant="contained" color="secondary" className={classes.sc}>
        Lengkapi Profile
      </Button>
    </Paper>
  );
}
export default PaperSheet;