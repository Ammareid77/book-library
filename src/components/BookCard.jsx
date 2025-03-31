import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-600">by {book.author_name?.join(", ") || "Unknown"}</p>
      <Link to={`/book/${book.key.replace("/works/", "")}`} className="text-blue-500 mt-2 block">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
