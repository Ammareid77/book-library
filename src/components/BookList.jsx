import BookCard from "./BookCard";
import "../styles/BookList.css"; // ✅ Import styling file
// import "../components/DarkModeToggle";

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



