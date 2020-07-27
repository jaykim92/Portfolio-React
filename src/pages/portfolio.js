// packages
import React from "react";

// components
import Project from "../components/project";

// utils
import projects from "../utils/projects.json";

function Portfolio() {
  return (
    // <div id="projects" className="full-height" style={{backgroundColor: "lightgray", overflow: "hidden"}}>
    //   <div className="full-height container">
    //     {projects.map(item => (
    //       <Project data={item} />
    //     ))}
    //   </div>
    // </div>
    <>
      {projects.map(item => (
        <Project data={item} />
      ))}
    </>
  );
}

export default Portfolio;
