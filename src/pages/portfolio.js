// packages
import React from "react";

// components
import Project from "../components/project";
import Header from "../components/header";

// utils
// import projects from "../utils/projects.json";

function Portfolio() {
  return (
    // <div className="full-height projects-img" id="projects">
    //   <Header />
    //   <div className='container d-flex'>
    //     <div className="row card-center mx-auto">
    //       {projects.projectArray.map((item, i) => (
    //         <Project key={i} data={item} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="full-height projects-img">
      <Header />
      <Project />
    </div>
  );
}

export default Portfolio;
