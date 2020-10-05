// packages
import React from "react";

// import components
import Header from "../components/header";

function About() {
  return (
    <>
      <Header />
      <div id="about" className="in-middle">
        <div className="jumbotron">
          <div
            className="container container-opaque"
          >
            <div
              className="container"
              style={{ width: "70%" }}
            >
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
                    am dedicated to creating a simple but beautiful user
                    experience for every project.
                  </p>
                </div>
                <div className="col-sm-8">
                  <p>
                    Check out some of the languages I know:{" "}
                  </p>
                </div>
                <div className="col-sm-4">
                <button
                      className="btn btn-success"
                      type="button"
                      dataToggle="collapse"
                      dataTarget="#collapse1"
                      ariaExpanded="false"
                      ariaControls="collapse1"
                    >
                      Languages
                    </button>
                </div>
                <div className="col-sm-8">
                  <p>
                    These are some technologies I've used in the past:{" "}
                  </p>
                </div>
                <div className="col-sm-4">
                <button
                      className="btn btn-success"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      Technologies
                    </button>
                </div>
              </div>

              <div className="row">
  <div className="col-sm-6">
    <div className="collapse multi-collapse" id="collapse1">
      <div className="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="collapse multi-collapse" id="collapse2">
      <div className="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
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
