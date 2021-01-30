// packages
import React, { useState } from "react";

// import bootstrap components
import { Carousel, Container } from "react-bootstrap";

// components
// import Project from "../components/project";
import Header from "../components/header";

// utils
// import projects from "../utils/projects.json";

function Portfolio() {
  // hook for carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
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
      <div className="carousel-margin-top">
        <Container className="carousel-height">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150"
                alt="first project slide"
              />
              <Carousel.Caption>
                <h3>Project 1</h3>
                <p>Description of first project</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/100"
                alt="second project slide"
              />
              <Carousel.Caption>
                <h3>Project 2</h3>
                <p>Description of second project</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </div>
  );
}

export default Portfolio;
