import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { FaTrashAlt } from "react-icons/fa"; // Import trash icon
import "./BookCard.css";
import { useState } from "react";

const BookCard = ({ book }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [removing, setRemoving] = useState(false);

  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150?text=No+Cover";

  const favorite = isFavorite(book);

  // Handle remove with animation
  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => {
      removeFromFavorites(book.key);
    }, 300); // Delay to allow animation to play
  };

  return (
    <div className={`book-card ${removing ? "fade-out" : ""}`}>
      <img src={coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
      <Link to={`/book/${book.key}`} className="details-button">
        View Details
      </Link>
      {favorite ? (
        <button className="favorite-btn remove" onClick={handleRemove}>
          <FaTrashAlt className="trash-icon" /> Remove
        </button>
      ) : (
        <button className="favorite-btn add" onClick={() => addToFavorites(book)}>
          Add to Favorite
        </button>
      )}
    </div>
  );
};

export default BookCard;
