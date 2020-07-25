import React from "react";
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
      className="full-height"
      data-aos="fade-up"
      data-aos-duration="700"
      id="portfolio-img-one"
    >
      <div className="columns custom-padding-top">
        <div
          className={`col text-${data.position} custom-margin-${data.position}`}
          data-aos={`zoom-in-${data.zoom}`}
          data-aos-duration="800"
        >
          <h2 className="text-white font-description">{data.title}</h2>
          <a href={data.deployed} className="text-secondary">
            <p>application</p>
          </a>
          <a href={data.repo} className="text-secondary">
            <p>repository</p>
          </a>
        </div>
        <div className="col">
          <figure
            className="image is-3by2"
            data-aos={`zoom-in-${data.position}`}
            data-aos-duration="800"
          >
            <img
              style={{ height: "20vh" }}
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
