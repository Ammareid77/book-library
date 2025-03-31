// src/components/BookList.jsx
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books.length) {
    return <p className="text-center">No books found. Try another search.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
