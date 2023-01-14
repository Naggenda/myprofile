import React from "react";

const card = (props) => {
  return (
    <div className="card">
      <h2 className="title">{props.num}</h2>
      <p>
        {props.year} <br />
        {props.exp}
      </p>
    </div>
  );
};

export default card;
