// packages
import React from "react";

// components
import Nav from "../components/nav";

// utils
import navlinks from "../utils/navlink.json";

function Front() {
  return (
    <>
      <div className="full-height cover-img">
        <div className="row">
          <div className="container vertical-center text-center" style={{width: "80%"}}>
            <h1 className="font-name text-white custom-font">Jay Kim</h1>
            <h5 className="text-white custom-font">Full Stack Web Developer</h5>
            <hr style={{ backgroundColor: "white" }}></hr>
          </div>          
        </div>
        <div className="row text-center">
          {navlinks.map((link, i) => (
              <Nav key={i} data={link} />
          ))}       
        </div>

      </div>
    </>
  );
}

export default Front;
