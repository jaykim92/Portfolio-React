// code for Project Page

// packages
import React from "react";
function Project({ data }) {
  return (
    <div>
      <div className="col-md-4 col-sm-12">
        <div
          className="card mx-auto mb-4"
          style={{ width: "20rem", height: "16rem" }}
        >
          <div className="card-body row">
            <h3 className="card-header col-sm-12 text-dark">{data.title}</h3>
            <a className="card-title col-sm-3 text-dark" href={data.deployed}>
              <h5>Visit</h5>
            </a>
            <a className="card-title col-sm-4 text-dark" href={data.repo}>
              <h5>Github</h5>
            </a>
            <a
              className="card-title col-sm-5 text-dark"
              href={require(`../assets/${data.location}.png`)}
            >
              <h5>Snapshot</h5>
            </a>
            <h6 className="text-justify">{data.desc}</h6>
            <h6 className="text-justify">{data.tech}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;