

// const BookDetailPage = () => {
//   const { id } = useParams(); // Get book ID from URL
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Initialize navigation

//   useEffect(() => {
//     // Fetch book details from Open Library API
//     const fetchBookDetails = async () => {
//       try {
//         const response = await fetch(`https://openlibrary.org/works/${id}.json`);
//         if (!response.ok) throw new Error("Failed to fetch book details");
//         const data = await response.json();

//         setBook(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookDetails();
//   }, [id]);

//   if (loading) return <p>Loading book details...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!book) return <p>Book details not found.</p>;

//    // Extract additional book information
//   const numberOfPages = book.number_of_pages || "Not Available";
//   const isbn = book.isbn_13 ? book.isbn_13[0] : book.isbn_10 ? book.isbn_10[0] : "Not Available";
//   const categories = book.subjects ? book.subjects.join(" - ") : "Not Available";

//   return (
//     <div className="book-detail-container">
//       {/* Go home Button with Image */}
//       <img
//         src={backArrow}
//         alt="Go Back"
//         className="go-back-icon"
//         onClick={() => navigate(-1)}
//       />
//     <div className="book-details">
//       <h1 >{book.title}</h1>
//       {book.description && (
//         <p className="description">
//           {typeof book.description === "string" ? book.description : book.description.value}
//         </p>
//       )}
//       <p className="first_publish_date">First publication date: {book.first_publish_date || "Unknown"}</p>

//       {/* New book details */}
//       <p><strong>Number of Pages:</strong> {numberOfPages}</p>
//       <p><strong>ISBN:</strong> {isbn}</p>
//       <p><strong>Categories:</strong> {categories}</p>
//     </div>
//     </div>
//   );
// };

// export default BookDetailPage;






import { useParams, useNavigate } from "react-router-dom"; // Navigation feature
import { useEffect, useState } from "react";
import backArrow from "../assets/home.png";
import "../styles/BookDetailPage.css";

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Fetch main book details
        const workRes = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!workRes.ok) throw new Error("Failed to fetch book details");
        const workData = await workRes.json();

        // Fetch edition details to get pages and ISBN
        const editionRes = await fetch(`https://openlibrary.org/works/${id}/editions.json`);
        if (!editionRes.ok) throw new Error("Failed to fetch edition info");
        const editionData = await editionRes.json();
        const firstEdition = editionData.entries[0]; // Get first edition

        setBook({
          title: workData.title,
          description:
            typeof workData.description === "string"
              ? workData.description
              : workData.description?.value || "No description available",
          publishDate: workData.first_publish_date || "Unknown",
          subjects: workData.subjects || [],
          number_of_pages: firstEdition?.number_of_pages,
          isbn: firstEdition?.isbn_13 || firstEdition?.isbn_10 || [],
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!book) return <p>No book details found.</p>;

  return (
    <div className="book-detail-container">
      <img
        src={backArrow}
        alt="Go Back"
        className="go-back-icon"
        onClick={() => navigate(-1)}
      />
      <div className="book-details">
        <h1>{book.title}</h1>
        <p className="description">{book.description}</p>
        {book.subjects.length > 0 && (
        <p>Categories: {book.subjects.slice(0, 5).join(" - ")}</p>
        )}
        <p>First publication date: {book.publishDate}</p>
        <p>Pages: {book.number_of_pages || "Not available"}</p>
        <p>ISBN: {book.isbn?.join(", ") || "Not available"}</p>
        
      </div>
    </div>
  );
};

export default BookDetailPage;