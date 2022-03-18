import React from "react";

const SubteamsList = ({ subteam, index }) => {
  return (
    <li>
      <p>
        {`Podzespół ${index + 1}`}
        <br />
        {subteam.name}
      </p>
    </li>
  );
};

export default SubteamsList;
