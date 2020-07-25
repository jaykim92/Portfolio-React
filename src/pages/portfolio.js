// packages
import React from "react";

// components
import Header from "../components/header";
import Project from "../components/project";

// utils
import projects from "../utils/projects.json";

function Portfolio() {
  return (
    <div id="portfolio">
      <Header />
      <div className="full-height container">
        {projects.map(item => (
          <Project data={item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
