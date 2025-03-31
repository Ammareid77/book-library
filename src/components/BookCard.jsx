import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext"; // Import the context
import "./BookCard.css"; // Ensure the styles are applied

const BookCard = ({ book }) => {
  const { addToFavorites, isFavorite } = useContext(FavoritesContext); // Access context functions

  const coverId = book.cover_i;
  const bookCover = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150"; // Placeholder if no cover

  return (
    <div className="book-card">
      {/* Book Cover */}
      <img src={bookCover} alt={book.title} className="book-cover" />

      {/* Book Details */}
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">by {book.author_name?.join(", ") || "Unknown"}</p>

      {/* View Details Button */}
      <Link to={`/book/${book.key.replace("/works/", "")}`} className="view-details-btn">
        View Details
      </Link>

      {/* Add to Favorites Button */}
      <button 
        className={`favorite-btn ${isFavorite(book) ? "favorited" : ""}`} 
        onClick={() => addToFavorites(book)}
      >
        {isFavorite(book) ? "❤️ Favorited" : "♡ Add to Favorites"}
      </button>
    </div>
  );
};

export default BookCard;
