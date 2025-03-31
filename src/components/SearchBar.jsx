import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      {/* Input for the search query */}
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="search-input"
      />
      
      {/* Search Button */}
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
