import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import SearchBar from "./component/SearchBar";
// import Profile from "./component/Profile";
// import Repo from "./component/Repo";
import Navigation from "./component/Navigation";
import Fallback from "./component/Fallback";
// import Result from "./component/Result";
// import ErrorPage from "./component/ErrorPage";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      className="main-page"
      FallbackComponent={Fallback}
      onReset={() => {
        navigate("/");
      }}
    >
      <Navigation />
      <SearchBar />
    <div>
      <h1 className="home">Bidex App</h1>

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



    </ErrorBoundary>
  );
}


export default App;
