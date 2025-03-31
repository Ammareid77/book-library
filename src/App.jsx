// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetailPage from "./pages/BookDetailPage";
import FavoritesPage from "./pages/FavoritesPage"; // ✅ Import FavoritesPage
import Navbar from "./components/Navbar"; // ✅ Import Navbar
import FavoritesProvider from "./context/FavoritesContext"; // ✅ Import FavoritesContext

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar /> {/* ✅ Add Navbar at the top */}
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} /> {/* ✅ New Favorites Route */}
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
