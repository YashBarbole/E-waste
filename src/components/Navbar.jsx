import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Book Pickup", path: "/book-pickup" },
    { name: "Visit Us", path: "/visit-us" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Awareness Blog", path: "/awareness" },
  ];

  return (
    <nav className="bg-green-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-wide"
          onClick={closeMenu}
        >
          <FaLeaf className="text-3xl text-green-200 animate-spin-slow" />
          <span>GreenTech</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-green-800 md:bg-transparent px-6 md:px-0 py-4 md:py-0 md:flex md:items-center transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className={`block md:inline-block text-lg px-4 py-2 rounded-md hover:bg-green-700 hover:text-green-100 transition ${
                location.pathname === path ? "bg-green-700" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
