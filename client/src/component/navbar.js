import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexShrink: 2,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    flexShrink: 2,
  },
  button: {
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Eban's PORTFOLIO
          </Typography>
          <Button component={Link} to='/' color="inherit">Projects</Button>
          <Button component={Link} to='/aboutMe' color="inherit">About Me</Button>
          <Button component={Link} to='/contactMe' color="inherit">Contact Me</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
