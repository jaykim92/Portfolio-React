// packages
import React, { useState } from "react";

// import bootstrap components
import { Carousel } from "react-bootstrap";

// // assets
// import inorout from "../assets/inorout.png";
// import weather from "../assets/weather-dashboard.png";
// import dayplanner from "../assets/day-planner.png";

// const imgCMS = {
//   inorout,
//   "weather-dashboard": weather,
//   "day-planner": dayplanner
// };

function Project({ data }) {
  // hook for carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className="div-margin-top">
      <h1>{data.title}</h1>
    </div>
      <div className="d-flex justify-content-center">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="w-100 mt-2 mb-4"
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="first project slide"
            />
            <Carousel.Caption>
              <h3>Project 1 slide 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="second project slide"
            />
            <Carousel.Caption>
              <h3>Project 1 slide 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div >
        <p>Description of app</p>
        <p>Link to github</p>
        <p>Link to application</p>
      </div>
    </>
  );
}

export default Project;
