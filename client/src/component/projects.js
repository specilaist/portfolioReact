import React from 'react';

import ProjectCard from './projectCard/projectCard';
import Navbar from './navbar';
import projects from '../projects.json';


function Projects(){

      console.log(projects)

      const renderProjects = () => {
            return projects.map((projects) => {
                  return <ProjectCard 
                  key={projects.id} 
                  name={projects.name} 
                  image={projects.image} 
                  code={projects.code} 
                  website={projects.websit} 
                  github={projects.github}/> 
            })
      }

      return (
            <div>
                  {renderProjects()}
            </div>
      )
}

export default Projects;