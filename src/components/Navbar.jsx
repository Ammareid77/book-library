import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle"; // ✅ Import Toggle Button

const Navbar = () => {
    return (
      <nav className="navbar">
        <DarkModeToggle/> {/* ✅ Add this button inside Navbar */}
      </nav>
    );
  };
  
  export default Navbar;