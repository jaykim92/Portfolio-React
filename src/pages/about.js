// packages
import React from "react";

function About() {
  return (
    <>
      <div id="about" className="full-height about-img">
        <div
          className="container container-opaque rounded-border"
          style={{ marginTop: "13%" }}
        >
          <div className="row">
            <div
              className="container text-center"
              style={{ width: "70%", marginTop: "5%"}}
            >
              <h5>Hello! My name is Jay.</h5>
              <h5>
                I am a full stack web developer in Orange County, CA with a
                knack for messy desks and clean designs. I have a cognitive
                psychology background doing research and data analyis and have
                recently taken on a new challenge of web development.
              </h5>
            </div>
          </div>
          <div className="row" style={{marginBottom: "5%"}}>
            <div className="col-sm-6 custom-margin-top">
              <h3 className="text-center">Languages</h3>
              <div className="row-fluid">
                <div
                  className="container rounded-border text-center"
                  style={{ width: "40%", marginTop: "1rem" }}
                >
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 custom-margin-top">
              <h3 className="text-center">Other Technologies</h3>
              <div className="row-fluid">
                <div
                  className="container rounded-border text-center"
                  style={{ width: "40%", marginTop: "1rem" }}
                >
                  <p>MongoDB</p>
                  <p>Express.js</p>
                  <p>React</p>
                  <p>Node</p>
                  <p>MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
