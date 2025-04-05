import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
          onClick={closeMenu}
        >
          <FaLeaf className="text-3xl text-green-200" />
          <span className="tracking-wide">GreenTech</span>
        </Link>

        {/* Hamburger */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 md:items-center absolute md:static left-0 top-full w-full md:w-auto bg-green-700 md:bg-transparent px-6 md:px-0 py-4 md:py-0 text-lg z-50`}
        >
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["Book Pickup", "/book-pickup"],
            ["Visit Us", "/visit-us"],
            ["Volunteer", "/volunteer"],
            ["Awareness Blog", "/awareness"],
          ].map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="block py-2 md:py-0 hover:text-green-200"
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
