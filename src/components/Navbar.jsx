import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logos.png"; // ✅ Ensure the logo path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Book Pickup", path: "/book-pickup" },
    { name: "Visit Us", path: "/visit-us" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Awareness Blog", path: "/awareness" },
    { name: "Map", path: "/map" }, // ✅ Added map page to navbar
  ];

  return (
    <nav className="bg-white text-green-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
        
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center h-full" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
        </Link>

        {/* 🍔 Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* 🌐 Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full bg-white md:bg-transparent md:static md:block transition-all duration-300 ease-in-out md:flex md:items-center`}
        >
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className={`block md:inline-block text-lg px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-800 transition ${
                location.pathname === path
                  ? "bg-green-100 font-semibold text-green-800"
                  : ""
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
