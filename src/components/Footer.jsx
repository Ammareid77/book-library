import React from "react";
import "../styles/Footer.css"; // You can style the footer with a separate CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Your Company Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
