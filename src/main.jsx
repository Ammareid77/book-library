import React from "react";
import ReactDOM from "react-dom/client"; // Ensure this is correct
import App from "./App";
import FavoritesProvider from "./context/FavoritesContext"; // Ensure this is imported
import "./index.css"; // Global styles

// Select the root element from index.html
const rootElement = document.getElementById("root");

// Use createRoot instead of render
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);
