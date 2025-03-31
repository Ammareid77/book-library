import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        🏠 Home
      </Link>
      <Link to="/favorites" className="nav-item">
        ❤️ Favorites
      </Link>
    </nav>
  );
};

export default Navbar;

