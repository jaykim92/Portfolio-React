import React from "react";

function Nav({ data }) {
  return (
    <div className="col-sm-4 custom-font" style={{fontSize: "120%"}}>
      <a className="text-white" href={`/info/#${data.link}`}>
        {data.name}
      </a>
    </div>
  );
}

export default Nav;
