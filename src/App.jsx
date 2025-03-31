// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetailPage from "./pages/BookDetailPage";
import Navbar from "./components/Navbar"; // Optional, if you have a Navbar

function App() {
  return (
    <div className="container mx-auto p-6">
      <Navbar /> {/* If you have a Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
