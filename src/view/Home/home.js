import React from "react";

const home = () => {
  return (
    <div className="intro">
      <div className="profile">
        <p>joshua</p>
      </div>
      <div className="desc">
        <h2 className="title">Naggenda Joshua</h2>
        <h2 className="title-job">Software Developer</h2>
        <div className="desc-para">
          <p>
            innovative Software Developer with Expertise in web front-end
            application development. offering 2 years experience in software
            development life cycle. keen and quick to learn and master new
            technologies and work in both team and self directed settings. Feel
            free to take a look at my latest projects in portfolio section.
          </p>
          <button className="btn">More About Me <span className="arrow">&#8594;</span></button>
        </div>
      </div>
    </div>
  );
};

export default home;
