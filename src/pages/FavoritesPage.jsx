import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";
import "../styles/FavoritesPage.css";


const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h2>My Favorite Books ❤️</h2>
      
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorite books added yet. Start exploring and add some!</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((book) => (
            <div key={book.key} className="favorite-item">
              <BookCard book={book} />
              <button
                className="remove-favorite-btn"
                onClick={() => removeFromFavorites(book.key)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
