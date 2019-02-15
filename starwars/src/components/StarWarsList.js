import React from "react";
import StarWarsPerson from "./StarWarsPerson";
import "./StarWars.css";

const StarWarsList = props => {
  console.log("These are props", props);
  return (
    <div className="starWarsList">
      {props.starwarsChars.map(item => (
        <StarWarsPerson item={item} />
      ))}
    </div>
  );
};

export default StarWarsList;
