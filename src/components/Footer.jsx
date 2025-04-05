import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} GreenTech Recycling. All rights reserved.</p>
    </footer>
  );
};

export default Footer;