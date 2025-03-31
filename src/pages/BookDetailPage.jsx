import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BookDetailPage = () => {
  const { id } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      {book.description && (
        <p className="mt-2 text-gray-700">
          {typeof book.description === "string" ? book.description : book.description.value}
        </p>
      )}
      <p className="mt-4 text-gray-600">Published: {book.first_publish_date || "Unknown"}</p>
    </div>
  );
};

export default BookDetailPage;
