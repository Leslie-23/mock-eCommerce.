import React from "react";
import "../allStyles.css/searchBar.css";

const SearchBar = () => {
  return (
    <div>
      <div class="search-container">
        <input type="text" id="search-input" placeholder="Search..." />
        <button type="button" id="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
