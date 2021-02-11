// packages
import React, { useState } from "react";

// import bootstrap components
import { Carousel } from "react-bootstrap";

function Project({ data }) {
  // hook for carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="div-margin-top">
        <h1 className="row">{data.title}</h1>
        <p className="row">{data.desc}</p>
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
              src={require(`../assets/${data.location1}.jpg`)}
              alt="project first scrreenshot"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../assets/${data.location2}.jpg`)}
              alt="project second screenshot"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mb-5">
        <p className="row">technologies</p>
        <a
          href={data.repo}
          className="row"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        <a
          href={data.deployed}
          className="row"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to application
        </a>
      </div>
      <hr></hr>
    </>
  );
}

export default Project;
