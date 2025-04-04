import BookCard from "./BookCard";
import "../styles/BookList.css"; // ✅ Import styling file

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;