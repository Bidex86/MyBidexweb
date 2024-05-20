import React from "react";
import { NavLink } from "react-router-dom";
// import { ErrorBoundary } from "react-error-boundary";
import SearchBar from "./SearchBar";
// import Profile from "./component/Profile";
// import Repo from "./component/Repo";
import Navigation from "./Navigation";
// import Fallback from "./component/Fallback";
// import Result from "./component/Result";
// import ErrorPage from "./component/ErrorPage";
import "../Style/home.css";

function Home() {
    return (
      <div>
        <Navigation />
        <SearchBar />
        <h1 className="home">Bidex App</h1>
        <p1 className="home-page">
          Your Welcome to Bidex App. click to see my Repos
        </p1>

        <NavLink
          className="navigate"
          style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "Red" }
          }
          to="/Home"
        >
          Home
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
          to="/Profile"
        >
          Profile
        </NavLink>
      </div>
    );
  }
  
  export default Home;
  