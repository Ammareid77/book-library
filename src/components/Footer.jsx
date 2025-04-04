import React from "react";
import "../styles/Footer.css"; // A separate CSS file for the footer

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Ammar Eid. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;