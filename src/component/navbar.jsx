import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import gambar from '../image/putih.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    position:'fixed',
    zIndex:35,
  },
  navbar: {
    backgroundColor: '#004d40',
  },
  menuButton: {
    marginLeft: "40%",
  },
  tulisan: {
    marginLeft:8,
  }
}));

 function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar variant="dense">
          <img src={gambar} width='20%' height='20%' />
          <div className={classes.tulisan}>
          <Typography variant="h6" color="inherit">
            lindungihutan
          </Typography>
          </div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
      </IconButton>
        </Toolbar>
      </AppBar>
  
    </div>
  );
}

export default Navbar;