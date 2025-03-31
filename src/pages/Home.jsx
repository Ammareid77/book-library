// src/pages/Home.jsx
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch books from the Open Library API
  const searchBooks = async (query) => {
    setLoading(true);
    setError(null); // Reset errors when starting a new search

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      if (!response.ok) throw new Error("Failed to fetch books. Try again!");

      const data = await response.json();
      if (data.docs.length === 0) throw new Error("No books found.");

      // Update state with search results (limit to 20 books)
      setBooks(data.docs.slice(0, 20));
    } catch (err) {
      setError(err.message);
      setBooks([]); // Clear book list in case of an error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="title">📚 Book Library</h1>
      <SearchBar onSearch={searchBooks} />

      {/* Display loading spinner */}
      {loading && <div className="loading-spinner"></div>}

      {/* Display error message */}
      {error && <p className="error">{error}</p>}

      {/* Display books if available */}
      {!loading && !error && <BookList books={books} />}
    </div>
  );
};

export default Home;
