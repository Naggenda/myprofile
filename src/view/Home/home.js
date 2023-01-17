import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Profile from "../../assets/profile.jpg";

const home = () => {
  const navigate = useNavigate();


  return (
    <div className="intro">
      <img src={Profile} alt="me" className="profile" />

      <div className="desc">
        <h2 className="title">Naggenda Joshua</h2>
        <h2 className="title-job">Software Developer</h2>
        <div className="desc-para">
          <p>
            Innovative Software Developer with Expertise in web front-end
            application development. offering 2 years experience in software
            development life cycle. keen and quick to learn and master new
            technologies and work in both team and self directed settings. Feel
            free to take a look at my latest projects in portfolio section.
          </p>
          <button onClick={()=>navigate("/about")} className="btn">
            More About Me <span className="arrow">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default home;
