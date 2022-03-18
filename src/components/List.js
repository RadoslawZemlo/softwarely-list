import React from "react";
import data from "../data.json";
import Subdivisions from "./Subdivisions";

const List = () => {
  console.log(data);

  return (
    <ul className="tree">
      <label htmlFor="list">
        <p>
          Nagłówek drzewa
          <br />
          wielowierszowy
        </p>
      </label>
      {data.subdivisions.map((subdivision, index) => (
        <Subdivisions key={index} subdivision={subdivision} index={index} />
      ))}
    </ul>
  );
};

export default List;
