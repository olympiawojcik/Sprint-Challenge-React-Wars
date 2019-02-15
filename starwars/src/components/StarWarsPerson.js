import React from "react";
import "./StarWars.css";

const StarWarsPerson = props => {
  console.log("these are props", props);
  return (
    <div className="starwarsPerson">
      <p>Name: {props.item.name}</p>
      <p>Birth Year: {props.item.birth_year}</p>
    </div>
  );
};

export default StarWarsPerson;
