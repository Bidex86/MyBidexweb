import React from "react";
import "../Style/navigation.css";

const Navigation = () => {
  return (
    <ul>
      <li>
        <a href="/Home">Home</a>
      </li>
      <li>
        <a href="/Repo">Repo</a>
      </li>
      <li>
        <a href="/Profile">Profile</a>
      </li>
    </ul>
  );
};

export default Navigation;
