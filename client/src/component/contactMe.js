import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),

      // height: theme.spacing(100),
    },
  },
  textField: {
    margin: theme.spacing(2),
    width: '30ch'
  },
  commentField: {
    margin: theme.spacing(2),
    width: '60ch',
    height: "20ch"
  }
}));

const ContactMe = () => {
  const classes = useStyles();
  const [submit, setSubmit] = useState("unsubmit");

  return (
    <div className={classes.root}>
      <Paper elevation={5}>
        <div>
          <h2 className={classes.textField}>Contact Me</h2>
          <p className={classes.textField}>
            Thank you for visiting my portfolio website. Please leave contact
            information so I may see who's checking out my website and I can
            follow up with.
          </p>
        </div>
        <form>
          <TextField
            className={classes.textField}
            id="outlined-search-full-width"
            label="Name"
            type="search"
            fullWidth
            variant="outlined"
            helperText="Any name You Identify As"
          />
          <TextField
            className={classes.textField}
            id="outlined-search"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="outlined-search"
            label="Phone"
            type="tel"
            variant="outlined"
            helperText="Not Necessary"
          />
          <TextField
            className={classes.textField}
            id="outlined-search"
            label="Business"
            type="string"
            variant="outlined"
            helperText="If a Recruiter, please list recruiting company"
          />
          <TextField
            className={classes.commentField}
            id="outlined-helperText"
            label="Comments"
            helperText="Please leave any comments or suggestions"
            variant="outlined"
          />
        </form>
        <div className={classes.textField}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default ContactMe;
