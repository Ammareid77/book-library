// src/pages/FavoritesPage.jsx
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">📚 Favorite Books</h1>
      {favorites.length === 0 ? (
        <p className="text-center">No favorite books yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
