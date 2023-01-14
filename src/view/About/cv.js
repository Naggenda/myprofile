import React from "react";
import Download from "../../components/download";

const cv = () => {
  return (
    <div className="experience">
      <h3>Personal Information</h3>
      <div className="cv-details">
        <div className="details">
          <p>First Name: Joshua</p>
          <p>Age: <span style={{color: "white"}}>23</span></p>
          <p>Freelance: <span style={{color: "white"}}>Available</span></p>
          <p>Full Time: <span style={{color: "white"}}>Available</span></p>
          <p>Phone: <span style={{color: "white"}}>+256 704 58 2023</span></p>
        </div>
        <div className="details">
          <p>Last Name: <span style={{color: "white"}}>Naggenda</span></p>
          <p>Nationality: <span style={{color: "white"}}>Ugandan</span></p>
          <p>Address: <span style={{color: "white"}}>Kampala</span></p>
          <p>Email: <span style={{color: "white"}}>naggendajoshua@gmail.com</span></p>
          <p>Languages: <span style={{color: "white"}}>English</span></p>
        </div>
      </div>
      <Download />
    </div>
  );
};

export default cv;
