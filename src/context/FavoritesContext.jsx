import { createContext, useState, useEffect } from "react";

// Create the context
export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  // Load favorites from localStorage on initial render
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to check if a book is already in favorites
  const isFavorite = (book) => {
    return favorites.some((fav) => fav.key === book.key);
  };

  // Function to add a book to favorites
  const addToFavorites = (book) => {
    if (!isFavorite(book)) {
      setFavorites([...favorites, book]);
    }
  };

  // Function to remove a book from favorites
  const removeFromFavorites = (bookKey) => {
    setFavorites(favorites.filter((fav) => fav.key !== bookKey));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
