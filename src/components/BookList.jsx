// src/components/BookList.jsx
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books.length) {
    return <p className="error">No books found. Try another search.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
