import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import ProjectCard from "./projectCard/projectCard";
import CollapseCard from "./projectCard/cardCollapse";
import projects from "../projects.json";
import javas from "./../images/Icons/J5.png";
import react from "./../images/Icons/React.png";
import html from "./../images/Icons/HTML.png";
import jquery from "./../images/Icons/JQuery.jpeg";
import mongo from "./../images/Icons/Mongo.png";
import css from "./../images/Icons/CSS.png";
import node from "./../images/Icons/Node.png";
import sql from "./../images/Icons/SQL.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  paper: {
    textAlign: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    margin: "30px",
  },
  projects: {
    display: "flex",
    flexWrap: "wrap",
    // height: 100,
    width: "100%",
  },
  logos: {
    display: "flex",
    margin: theme.spacing(2),
    alignItems: "center",
    height: "100px",
  },
  images: {
    height: "100px",

  },
}));

function Projects() {
  const classes = useStyles();

  console.log(projects);

  const renderProjects = () => {
    return projects.map((projects) => {
      return (
        <CollapseCard
          key={projects.id}
          name={projects.name}
          image={projects.image}
          code={projects.code}
          elavator={projects.elavator}
          description={projects.description}
          website={projects.website}
          github={projects.github}
        />
      );
    });
  };

  // const renderLogos = () => {
  // 	return(

  // 	)
  // };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h1>Current and Previous Projects</h1>
        <h4>
          Some projects that I have wholly or partly contributed to. Feel free
          to click on the links and explore how the apps work. GitHub links
          allow you to see the components of the apps. Enjoy!
        </h4>
        <h3>Technologies And Languages:</h3>
        <Grid container className={classes.logos}>
          <Grid item className={classes.logos}>
            <img className={classes.images} src={react} alt="react logo" />
            <img className={classes.images} src={javas} alt="javascript logo" />
            <img className={classes.images} src={html} alt="HTML logo" />
            <img className={classes.images} src={jquery} alt="JQuery logo" />
            <img className={classes.images} src={mongo} alt="MongoDB logo" />
            <img className={classes.images} src={sql} alt="MySQL logo" />
            <img className={classes.images} src={node} alt="Node logo" />
            <img className={classes.images} src={css} alt="CSS logo" />
          </Grid>
        </Grid>
      </Paper>
      <div>
      <Grid
        container
        className={classes.projects}
        direction="row"
        alignItems="flex-start"
        spacing={3}
      >
        {renderProjects()}
      </Grid>

      </div>
    </div>
  );
}

export default Projects;
