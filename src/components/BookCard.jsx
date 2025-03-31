// src/components/BookCard.jsx
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name || 'Unknown Author'}</p>
      {/* Ensure book.key exists and handle missing values */}
      <Link to={book.key ? `/book/${book.key.replace("/works/", "")}` : "#"} className="details-button">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
