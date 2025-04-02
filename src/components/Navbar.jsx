import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle"; // ✅ Import Toggle Button

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Book Library</h1>
        <DarkModeToggle /> {/* ✅ Add this button inside Navbar */}
      </nav>
    );
  };
  
  export default Navbar;