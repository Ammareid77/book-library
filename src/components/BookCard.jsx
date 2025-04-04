import { Link } from "react-router-dom";
import defaultCover  from "../assets/placeholder.jpg";
import "../styles/BookCard.css";
import "../styles/BookList.css";

const BookCard = ({ book }) => {
  // Construct the cover image URL
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : defaultCover; // Placeholder if no cover

  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} className="book-cover" />
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-600">{book.author_name?.join(" & ") || "Unknown author"}</p>
      <Link to={`/book/${book.key.replace("/works/", "")}`} className="view">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;