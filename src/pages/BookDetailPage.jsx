// src/pages/BookDetailPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) throw new Error("Failed to fetch book details.");
        
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

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <p className="error">{error}</p>;
  if (!book) return <p className="error">Book details not found.</p>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      {book.description && (
        <p>{typeof book.description === "string" ? book.description : book.description.value}</p>
      )}
      <p>Published: {book.first_publish_date || "Unknown"}</p>
    </div>
  );
};

export default BookDetailPage;
