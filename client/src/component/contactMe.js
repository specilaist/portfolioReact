import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
}));

const ContactMe = () => {

      const classes = useStyles()

      return (
            <div className={classes.root}>
                  <Paper elevation={5}>
                  <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                              readOnly: true,
                        }}
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                              shrink: true,
                        }}
                        variant="outlined"
                        />
                        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
                        <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="outlined"
                        />
                  </Paper>

            </div>
      )
}

export default ContactMe;