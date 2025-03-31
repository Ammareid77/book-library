import { Link } from "react-router-dom";
import "./BookCard.css";


const BookCard = ({ book }) => {
  const coverId = book.cover_i;
  const coverURL = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150?text=No+Cover"; // Default image

  return (
    <div className="book-card">
      <img src={coverURL} alt={book.title} className="book-cover" />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author_name?.join(", ") || "Unknown"}</p>
      <Link to={`/book/${book.key.replace("/works/", "")}`} className="view-details">
  View Details
</Link>

    </div>
  );
};

export default BookCard;

