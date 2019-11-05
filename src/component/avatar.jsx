import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  bigAvatar: {
    marginTop: 30,
    margin: 10,
    width: 130,
    height: 130,
    shadow: '0 10px 20px rgba(0,0,0,0.10)',
    background: '#00695c',
  },
  orangeAvatar: {
    margin: 80,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

function LetterAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
    </Grid>
  );
}
export default LetterAvatars;