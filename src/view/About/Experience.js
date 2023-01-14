import React from "react";
import Card from "../../components/card";

const Experience = () => {
  return (
    <div className="experience">
      <div className="cv-details">
        <div className="details">
          <Card num="2+" year="years of" exp="Experience"/>
          <Card num="6+" year="Happy" exp="Customers" />
        </div>
        <div className="details">
          <Card num="42+" year="Completed" exp="Projects" />
          <Card num="756+" year="Working" exp="Days" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
