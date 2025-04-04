import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter from here
import Home from "./pages/Home";
import BookDetailPage from "./pages/BookDetailPage";
import Navbar from "../src/components/Navbar"; // ✅ Import Navbar
import Footer from "./components/Footer"; // Import the Footer component


function App() {
  return (
    <>
    <Navbar /> {/* Navbar with Dark Mode Toggle */}
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;


