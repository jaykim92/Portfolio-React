// packages
import React from "react";

// assets
import inorout from "../assets/inorout.png";
import weather from "../assets/weather-dashboard.png";
import dayplanner from "../assets/day-planner.png";

const imgCMS = {
  inorout,
  "weather-dashboard": weather,
  "day-planner": dayplanner,
};

function Project({ data }) {
  return (
    <div
      className=" row full-height"
      data-aos="fade-up"
      data-aos-duration="700"
      id="portfolio-img-one"
    >
      <div className="col-sm-12 custom-margin-top">
        <div
          className={`col text-${data.position} custom-margin-${data.position}`}
          data-aos={`zoom-in-${data.zoom}`}
          data-aos-duration="800"
        >
          <h2 className="">{data.title}</h2>
          <a href={data.deployed} className="">
            <p>application</p>
          </a>
          <a href={data.repo} className="">
            <p>repository</p>
          </a>
        </div>
        <div className="container">
          <figure
            className=""
            data-aos={`zoom-in-${data.position}`}
            data-aos-duration="800"
          >
            <img
              className="img-fluid rounded"
              src={imgCMS[data.img]}
              alt="project screenshot"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Project;
