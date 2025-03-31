// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetailPage from "./pages/BookDetailPage";
import FavoritesPage from "./pages/FavoritesPage"; // ✅ Import FavoritesPage
import FavoritesProvider from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} /> {/* ✅ New Route */}
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
