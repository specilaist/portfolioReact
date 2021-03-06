import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import me from './../images/me.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(100),
    },
  },
  paper: {},
  media: {
    margin: theme.spacing(2),
    height: "300px",
  },
  text: {
    margin: theme.spacing(2),
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title="About Me" titleTypographyProps="h1">
          <Typography component="h2">About Me</Typography>
        </CardHeader>
        <CardMedia
          className={classes.media}
					alt='nature'
          component="image"
          height="100"
					title='Me'
          src={me}>
            <img className={classes.media} alt="Me in a crowd" src={ me } />

        </CardMedia>
        <CardContent>
          <p>Hello,</p>
          My name is Eban Cambridge and seeking a position as a Full Stack Web
          Developer. I am a person who loves to learn new things. It started
          when I worked towards becoming an Eagle Scout with the Boy Scouts of
          America. I learned through the process of getting merit badges the
          benefits of a diverse learning background, and how well rounded it can
          make a person. I like web development for the same concept of
          continual learning and applying new skills to an ever-evolving
          implementation.
          <p>
            As a professional I've learned the joy of helping businesses realize
            their objectives. I think Web Development is a great way to help
            businesses streamline their operations and make data work for them.
            I collaborated with many companies as a Senior Executive with the
            Boy Scouts of America. I also worked within a team of fellow
            associates and volunteers to meet organizational goals. As a
            Business Assistant Consultant contracted to assist businesses in
            Oakland with infrastructure redevelopment, I know how to listen and
            provide solutions. In every profession I have experienced the
            difficulties of working with clunky software and am looking to be
            the change I seek in the world. I look forward to being able to make
            a more streamlined, user friendly, product for whomever I am
            helping.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;
