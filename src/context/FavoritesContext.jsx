import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export const useFavorites = () => {
    return useContext(FavoritesContext);
};

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const isFavorite = (book) => favorites.some((fav) => fav.key === book.key);

    const addToFavorites = (book) => {
        if (!isFavorite(book)) {
            setFavorites([...favorites, book]);
        }
    };

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
