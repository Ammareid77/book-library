// src/pages/Home.jsx
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch books from the Open Library API
  const searchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();
      // Update the state with search results (limit to 20 books for better UX)
      setBooks(data.docs.slice(0, 20));
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">📚 Book Library</h1>
      <SearchBar onSearch={searchBooks} />
      {loading && <p>Loading books...</p>}
      <BookList books={books} />
    </div>
  );
};

export default Home;
