import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import ProjectCard from "./projectCard/projectCard";
import projects from "../projects.json";
import j5 from "../assests/projectIcons/calendar.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
		width: "auto",
		height: "auto",
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
  logos: {
    margin: theme.spacing(2),
		alignItems: 'center',
		height: "100px",
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

	// const renderLogos = () => {
	// 	return(

	// 	)
	// };

  return (
    <div className={classes.root}>
			<Paper className={classes.paper}>
				<h1>Current and Previous Projects</h1>
				<h4>Some projects that I have wholly or partly contributed to. Feel free to click on the links and explore how the apps work. GitHub links allow you to see the components of the apps. Enjoy!</h4>
				<h3>Technologies And Languages:</h3>
				<Grid container className={classes.logos}>
					<Grid item className={classes.root} xs={5} sm={1}>
						<image className={classes.logos} src={j5} alt='javascript log'/>
					</Grid>
				</Grid>
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
