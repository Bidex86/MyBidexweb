import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "../Style/search.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      );

      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="diva">
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
          className="input"
        />
        <button className="click" onClick={handleClick}>
          search
        </button>
      </div>
      <Result repos={repos} />
    </>
  );
};

export default SearchBar;
