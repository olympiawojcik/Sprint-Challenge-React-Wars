import React from "react";
import "./StarWars.css";

const StarWarsPerson = props => {
  console.log("these are props", props);
  return (
    <div className="starwarsPerson">
      <p>{props.item.name}</p>
    </div>
  );
};

export default StarWarsPerson;
