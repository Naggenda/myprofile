import React from "react";
import Cv from "./cv";
import Experience from "./Experience";


const about = () => {
  return (
    <div className="about-page">
      <h1 className="headTitle">About <span className="title">Me</span></h1>
      <div className="personal-details">
        <Cv />
        <Experience />
      </div>
    </div>
  );
};

export default about;
