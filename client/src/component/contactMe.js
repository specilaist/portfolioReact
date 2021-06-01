import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
  textField: {
    margin: theme.spacing(2),
  },
  commentField: {
    margin: theme.spacing(2),
    width: '60ch',
    height: "20ch"
  },
  button: {
    margin: theme.spacing(2),
  }
}));

const ContactMe = () => {
  const classes = useStyles();
  const [submit, setSubmit] = useState("unsubmit");
  const gitHubLink = "https://github.com/specilaist"


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
          {/* <a href="https://www.linkedin.com/in/eban-cambridge345/" target="_blank" img={LinkedInIcon}>{GitHubIcon}LinkedIn</a> */}
          {/* <a href="" target="_blank" img={LinkedInIcon}>Email</a> */}
          <Button className={classes.button} variant="contained" startIcon={<MailOutlineIcon />}  href="mailto:eecambridge@gmail.com" >Email</Button>
          <Button className={classes.button} variant="contained" startIcon={<GitHubIcon /> } href="https://github.com/specilaist" target="_blank" >GitHub</Button>
          <Button className={classes.button} variant="contained" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/eban-cambridge345" target="_blank" >LinkedIn</Button>
          <div>
            
          </div>
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
          {/* {if ({submit} === "unsubmit") } */}
          <Button className="" variant="contained" color="primary" onClick={() => {}} >
            Submit
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default ContactMe;
