import React from "react";
import Download from "../../components/download";

const cv = () => {
  return (
    <div className="experience">
      <h3>Personal Information</h3>
      <div className="cv-details">
        <div className="details">
          <p>First Name: Joshua</p>
          <p>Age: <span style={{color: "blue"}}>23</span></p>
          <p>Freelance: <span style={{color: "blue"}}>Available</span></p>
          <p>Full Time: <span style={{color: "blue"}}>Available</span></p>
          <p>Phone: <span style={{color: "blue"}}>+256 704 58 2023</span></p>
        </div>
        <div className="details">
          <p>Last Name: <span style={{color: "blue"}}>Naggenda</span></p>
          <p>Nationality: <span style={{color: "blue"}}>Ugandan</span></p>
          <p>Address: <span style={{color: "blue"}}>Kampala</span></p>
          <p>Email: <span style={{color: "blue"}}>naggendajoshua@gmail.com</span></p>
          <p>Languages: <span style={{color: "blue"}}>English</span></p>
        </div>
      </div>
      <Download />
    </div>
  );
};

export default cv;
