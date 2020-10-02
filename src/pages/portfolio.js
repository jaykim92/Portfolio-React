// packages
import React from "react";

// components
import Project from "../components/project";
import Header from "../components/header";

// utils
import projects from "../utils/projects.json";

function Portfolio() {
  return (
    <div className="full-height" id="projects">
      <Header />
      <div className="row">
        {projects.map((item) => (
          <Project data={item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
