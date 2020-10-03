// packages
import React from "react";

// import components
import Header from "../components/header";

function About() {
  return (
    <>
      <Header />
      <div id="about" className="full-height about-img">
        <div className="jumbotron jumbotron-fluid">
          <div
            className="container container-opaque"
            style={{ marginTop: "1rem" }}
          >
            <div
              className="container"
              style={{ width: "70%", marginTop: "5%" }}
            >
              <h5 className="display-4 text-center">Hi there! My name is Jay.</h5>
              <h5 className="lead text-center">
                I am a full stack web developer in Orange County, CA.
              </h5>
              <hr className="my-3"></hr>
                <p>Check out some of the languages I know: <button className="btn btn-success">Languages</button></p> 
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
      </div>
    </>
  );
}

export default About;
