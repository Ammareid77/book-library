// // src/components/BookList.jsx
// import BookCard from "./BookCard";
// import "../styles/BookList.css"; // ✅ Import styling file

// const BookList = ({ books }) => {
//   if (!books.length) {
//     return null; // Removed the message
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {books.map((book) => (
//         <BookCard key={book.key} book={book} />
//       ))}
//     </div>
//   );
// };

// export default BookList;



// src/components/BookList.jsx
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



