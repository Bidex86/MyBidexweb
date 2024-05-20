import { NavLink } from "react-router-dom";
import React from "react";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import "../Style/Profile.css";
// import { ErrorBoundary } from "react-error-boundary";

function Profile() {
  return (
    <section className="main-container">
     <Navigation />
    <SearchBar />
      <div className="container">Bidex Repository</div>

      <div className="card-name">This is my Repository</div>
      <dl className="Repo">
        <dt>
          <a href="https://github.com/Bidex86/bidex86">Bidex86 </a>
        </dt>
        <dt>
          <a href="https://github.com/Bidex86/BidexdEV">BidxdEV</a>
        </dt>
      </dl>
      <NavLink
        className="navigate"
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "Red" }
        }
        to="/Profile"
      >
        Profile
      </NavLink>

      <NavLink
        className="navigate"
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "Red" }
        }
        to="/Repo"
      >
        Repo
      </NavLink>

      <NavLink
        className="navigate"
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "Red" }
        }
        to="/Home"
      >
        Home
      </NavLink>
    </section>
  );
}

export default Profile;
