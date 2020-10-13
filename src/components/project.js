// packages
import React from "react";

// // assets
// import inorout from "../assets/inorout.png";
// import weather from "../assets/weather-dashboard.png";
// import dayplanner from "../assets/day-planner.png";


// const imgCMS = {
//   inorout,
//   "weather-dashboard": weather,
//   "day-planner": dayplanner
// };


function Project({ data }) {
  return (
    // <div
    //   className=" row full-height"
    //   data-aos="fade-up"
    //   data-aos-duration="700"
    //   id="projects"
    // >
    //   <div className="col-sm-12 custom-margin-top">
    //     <div
    //       className={`col text-${data.position} custom-margin-${data.position}`}
    //       data-aos={`zoom-in-${data.zoom}`}
    //       data-aos-duration="800"
    //     >
    //       <h2 className="">{data.title}</h2>
    //       <a href={data.deployed} className="">
    //         <p>application</p>
    //       </a>
    //       <a href={data.repo} className="">
    //         <p>repository</p>
    //       </a>
    //     </div>
    //     <div className="container">
    //       <figure
    //         className=""
    //         data-aos={`zoom-in-${data.position}`}
    //         data-aos-duration="800"
    //       >
    //         <img
    //           className="img-fluid rounded"
    //           src={imgCMS[data.img]}
    //           alt="project screenshot"
    //         />
    //       </figure>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="col-md-4 col-sm-12">
        <div className="card mx-auto mb-4" style={{ width: "20rem", height: "16rem"}}>
          <div className="card-body row">
            <h3 className="card-header col-sm-12"><a href={`#${data.id}`} className="text-dark" data-toggle="modal" data-target={data.id}>{data.title}</a></h3>
            <a className="card-title col-sm-12 pt-3 text-dark" href={data.deployed}>
              Visit
            </a>
            <a className="card-title col-sm-12 text-dark" href={data.repo}>
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="modal fade" id={data.id} tabIndex="-1" role="dialog" aria-labelledby="projectModalT">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-titel" id="projectModalTitle">{data.title}</h5>
                </div>
            </div>
        </div>
      </div>          
    </div>
  );
}

export default Project;
