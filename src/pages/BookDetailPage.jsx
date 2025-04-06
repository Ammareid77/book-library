import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation feature
import backArrow from "../assets/home.png"; // Import Go back image
import "../styles/BookDetailPage.css";

const BookDetailPage = () => {
  const { id } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    // Fetch book details from Open Library API
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) throw new Error("Failed to fetch book details");
        const data = await response.json();

        setBook(data);
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
  if (!book) return <p>Book details not found.</p>;

  return (
    <div className="book-detail-container">
      {/* Go home Button with Image */}
      <img
        src={backArrow}
        alt="Go Back"
        className="go-back-icon"
        onClick={() => navigate(-1)}
      />
    <div className="book-details">
      <h1 >{book.title}</h1>
      {book.description && (
        <p className="description">
          {typeof book.description === "string" ? book.description : book.description.value}
        </p>
      )}
      <p className="first_publish_date">Published: {book.first_publish_date || "Unknown"}</p>
    </div>
    </div>
  );
};

export default BookDetailPage;