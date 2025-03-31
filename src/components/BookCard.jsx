import { Link } from "react-router-dom";
import "../styles/BookCard.css"; // Import the CSS file

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">by {book.author_name?.join(", ") || "Unknown"}</p>
      <Link to={`/book/${book.key.replace("/works/", "")}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
