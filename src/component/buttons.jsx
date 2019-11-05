import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
  margin: {
    margin: theme.spacing(1),
    backgroundColor: "green",
    borderRadius: "50px",
    width: "90%",
    height: "80%",
  },
  button: {
    borderRadius: "50px",
    maxWidth: '100',
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.margin}>
        Buat Kampanye Alam
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="inherit" className={classes.button}>
          Pelajari Bagaimana Kami Bekerja
        </Button>
      </label>
    </div>
  );
}