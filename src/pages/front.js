// packages
import React from "react";

// components
import Portfolio from "./portfolio"

function Front() {
  return (
    <>
      <div className="full-height cover-img">
        <div className="container text-center vertical-center" style={{width: "70%"}}>
          <h1 className="text-white custom-font font-name">Jay Kim</h1>
          <h5 className="text-white">Full Stack Web Developer</h5>
          <hr style={{ backgroundColor: "white" }}></hr>
          <div className="row">
            <a className="col-sm-6 text-white" href="#portfolio">
              Portfolio
            </a>
            <a className="col-sm-6 text-white" href="./contact">
              Contact
            </a>
          </div>
        </div>
      </div>

      <Portfolio />
    </>
  );
}

export default Front;
