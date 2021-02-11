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
      <div className="div-margin-top row">
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
              src={require(`../assets/${data.location1}.jpg`)}
              alt="first project slide"
            />
            <Carousel.Caption>
              <h3>Project 1 slide 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../assets/${data.location2}.jpg`)}
              alt="second project slide"
            />
            <Carousel.Caption>
              <h3>Project 1 slide 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mb-5">
        <p className="row">{data.desc}</p>
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
    </>
  );
}

export default Project;
