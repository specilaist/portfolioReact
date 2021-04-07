import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ProjectCard from "./projectCard/projectCard";
import projects from "../projects.json";

const useStyles = makeStyles((theme) => ({
  root: {
		width: "auto",
  },
  paper: {
		flexGrow: 1,
    flexShrink: 2,
		flexWrap: "wrap",
		textAlign: "center",
		alignItems: "center",
		padding: theme.spacing(3),
		margin: "30px",
	},
  projects: {
		display: "flex",
    flexWrap: "wrap",
    // height: 100,
    // width: 100,
  },
  text: {
    margin: theme.spacing(2),
  },
}));

function Projects() {
	const classes = useStyles();
  
	console.log(projects);

  const renderProjects = () => {
    return projects.map((projects) => {
      return (
        <ProjectCard
          key={projects.id}
          name={projects.name}
          image={projects.image}
          code={projects.code}
          website={projects.website}
          github={projects.github}
        />
      );
    });
  };

  return (
    <div className={classes.root}>
			<Paper className={classes.paper}>
				<h1>Current and Previous Projects</h1>
				<h4>Some projects that I have wholly or partly contributed to. Feel free to click on the links and explore how the apps work. GitHub links allow you to see the components of the apps. Enjoy!</h4>
				<h3>Technologies And Languages</h3>
			</Paper>
      <Grid container className={classes.root} direction="row" alignItems="flex-start" spacing={3} xs={12} md={4} sm={5}>
        <Grid item >
          {renderProjects()}
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
