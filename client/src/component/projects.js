import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ProjectCard from "./projectCard/projectCard";
import projects from "../projects.json";

function Projects() {
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
    <div>
      <Grid container direction="row" alignItems="flex-start" spacing={3}>
        <Grid item xs={12} md={4} sm={5}>
          {renderProjects()}
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
