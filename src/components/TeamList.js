import React from "react";
import SubteamsList from "./SubteamsList";

const TeamList = ({ team, index }) => {
  return (
    <li>
      {team.subteams ? (
        <>
          <input type="checkbox" name="teams" id={team.name} />
          <label htmlFor={team.name}>
            <p>
              {`Zespół ${index + 1}`}
              <br />
              {team.name}
            </p>
          </label>
          <ul>
            {team.subteams.map((subteam, index) => (
              <SubteamsList key={index} subteam={subteam} index={index} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          {`Zespół ${index + 1}`}
          <br />
          {team.name}
        </p>
      )}
    </li>
  );
};

export default TeamList;
