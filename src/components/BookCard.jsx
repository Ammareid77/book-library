import { Link } from "react-router-dom";
// import "../styles/BookCard.css";


const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-600">by {book.author_name?.join(", ") || "Unknown"}</p>
      <Link to={`/book/${book.key.replace("/works/", "")}`} className="view" >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;

