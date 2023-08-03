




import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-section">
      <div className="search-input">
        <input
          className="search-box"
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
        <button className="search">Search</button>
      </div>
    </div>
  );
}

export default Search;

