// packages
import React from "react";

// components
import Project from "../components/project";
import Header from "../components/header";

// utils
import projects from "../utils/projects.json";

function Portfolio() {
  return (
    <div className="full-height projects-img" id="projects">
      <Header />
      <div className='container container-opaque'>
        <div className="row vertical-center">
          {projects.map((item) => (
            <Project data={item} />
          ))}
        </div>        
      </div>
    </div>
  );
}

export default Portfolio;
