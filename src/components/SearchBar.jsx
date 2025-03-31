// src/components/SearchBar.jsx
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="search-input"
      />
      <button type="submit" disabled={!query.trim()} className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
