import React from "react";
import TeamList from "./TeamList";

const Subdivisions = ({ index, subdivision }) => {
  return (
    <li>
      <input type="radio" name="subdivisions" id={subdivision.name} />
      <label htmlFor={subdivision.name}>
        <p>{`Pododdział ${index + 1}`}</p>
      </label>
      <ul>
        {subdivision.teams.map((team, index) => (
          <TeamList key={index} team={team} index={index} />
        ))}
      </ul>
    </li>
  );
};

export default Subdivisions;
