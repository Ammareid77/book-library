import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        🏠 Home
      </Link>
    </nav>
  );
};

export default Navbar;


