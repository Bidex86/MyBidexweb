import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import "../Style/Repo.css";

function Repo() {
  const [currentRepos, setCurrentRepos] = useState(0);
  const [Repos, setRepos] = useState(null);
  const [repoItems, setRepoItems] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reposItems = [
      {
        title: "Bidex86",
        url: <a href="https://github.com/Bidex86/bidex86">Bidex86 </a>,
        description: "My first repository",
      },

      {
        title: "BidexDev",
        url: <a href="https://github.com/users/Bidex86/BidexdEV">BidexdEV</a>,
        description: "My second repository",
      },
    ];
    const items = reposItems[currentRepos];
    setRepoItems(reposItems);
    setRepos(items);
    setLoading(false);
  }, [currentRepos]);

  const handleNext = (event) => {
    event.preventDefault();

    const length = repoItems.lenghth;
    const count = length - 1;
    if (currentRepos < count) {
      setCurrentRepos(currentRepos + 1);
    } else {
      setCurrentRepos(1);
    }
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    if (currentRepos > 0) {
      setCurrentRepos((prev) => prev - 1);
    } else {
      setCurrentRepos(1);
    }
  };

  return (
    <section className="main-container">
     <Navigation />
      <SearchBar />
      <section className="Repos">
        {loading ? (
          <div>loading</div>
        ) : (
          <div className="Repo1">
            <h2>{Repos.title}</h2>
            <p>{Repos.description}</p>
            <a href={Repos.url}>{Repos.url}</a>
          </div>
        )}
      </section>
      <div className="paginate">
        <button className="prev" onClick={handleNext}>
          prev
        </button>
        <button className="next" onClick={handlePrevious}>
          next
        </button>
      </div>
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

export default Repo;
