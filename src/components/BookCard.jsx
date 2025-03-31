// src/components/BookCard.jsx
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>by {book.author_name?.join(", ") || "Unknown"}</p>
      <Link to={`/book/${book.key.replace("/works/", "")}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
