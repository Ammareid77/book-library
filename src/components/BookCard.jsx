// src/components/BookCard.jsx
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.key === book.key);

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>by {book.author_name?.join(", ") || "Unknown"}</p>
      <Link to={`/book/${book.key.replace("/works/", "")}`}>View Details</Link>
      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={() => toggleFavorite(book)}
      >
        {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </button>
    </div>
  );
};

export default BookCard;

