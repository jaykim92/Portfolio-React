// packages
import React, { useState } from "react";

// import components
import Header from "../components/header";

const About = (props) => {
  const [collapse1, setCollapse1] = useState(true);
  const handleCollapse1 = () => setCollapse1(!collapse1);

  const [collapse2, setCollapse2] = useState(true);
  const handleCollapse2 = () => setCollapse2(!collapse2);

  return (
    <>
      <Header />
      <div id="about" className="in-middle">
        <div className="jumbotron">
          <div className="container container-opaque">
            <div className="container" style={{ width: "70%" }}>
              <h5 className="display-4 text-center">
                Hi there! My name is Jay.
              </h5>
              <h5 className="lead text-center">
                I am a full stack web developer in Orange County, CA.
              </h5>
              <hr className="my-3"></hr>
              <div className="row">
                <div className="col-sm-12">
                  <p>
                    I have a background in psychology and recently earned a
                    certificate in full stack web development from the
                    University of California, Irvine. I love clean designs and
                    am dedicated to creating a simple yet beautiful user
                    experience for every project.
                  </p>
                </div>
                <div className="col-sm-8">
                  <p>Check out some of the languages I know: </p>
                </div>
                <div className="col-sm-4">
                  <button
                    className="btn btn-success"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-controls="collapse1"
                    aria-expanded={!collapse1 ? true : false}
                    aria-label="Toggle languages"
                    onClick={handleCollapse1}
                  >
                    Languages
                  </button>
                </div>
                <div className="col-sm-8">
                  <p>These are some technologies I've used in the past: </p>
                </div>
                <div className="col-sm-4">
                  <button
                    className="btn btn-success"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-controls="collapse2"
                    aria-expanded={!collapse2 ? true : false}
                    aria-label="Toggle languages"
                    onClick={handleCollapse2}
                  >
                    Technologies
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className={`${collapse1 ? 'collapse' : ''} navbar-collapse`} id="collapse1">
                    <div className="card card-body text-center">
                      <h5>Languages</h5>
                      <hr></hr>
                      <p>HTML5</p>
                      <p>CSS3</p>
                      <p>JavaScript</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                <div className={`${collapse2 ? 'collapse' : ''} navbar-collapse`} id="collapse2">
                    <div className="card card-body text-center">
                      <h5>Technologies</h5>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-6">
                          <p>React</p>
                          <p>Express</p>
                          <p>Node</p>                      
                        </div>
                        <div className="col-sm-6">
                          <p>MySQL</p>
                          <p>MongoDB</p>
                          <p>jQuery</p> 
                        </div>                        
                      </div>
                    </div>
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
