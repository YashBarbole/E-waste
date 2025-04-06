import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-green-900 text-white py-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">GreenTech Recycling</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Leading the way in responsible e-waste management. <br />
            Join us in building a cleaner, greener future.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Office</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            GreenTech Recycling Pvt. Ltd.<br />
            3rd Floor, Eco Tower,<br />
            Baner Road, Baner,<br />
            Pune, Maharashtra - 411045
          </p>
          <p className="mt-2 text-sm text-gray-300">
            📞 +91 98765 43210
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/" className="hover:text-white transition duration-200">Home</Link></li>
            <li><Link to="/book-pickup" className="hover:text-white transition duration-200">Book a Pickup</Link></li>
            <li><Link to="/about" className="hover:text-white transition duration-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-lg">
            <a href="#" className="hover:scale-110 text-white transition duration-200"><FaFacebookF /></a>
            <a href="#" className="hover:scale-110 text-white transition duration-200"><FaTwitter /></a>
            <a href="#" className="hover:scale-110 text-white transition duration-200"><FaInstagram /></a>
            <a href="#" className="hover:scale-110 text-white transition duration-200"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 mt-8 pt-6 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} GreenTech Recycling. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
