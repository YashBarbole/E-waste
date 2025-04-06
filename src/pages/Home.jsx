import React from "react";
import { Link } from "react-router-dom";
import recycle1 from "../assets/recycle1.jpg"; // Replace with correct path
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-green-100 to-green-200 h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-6 leading-tight drop-shadow">
            Welcome to <span className="text-green-800">GreenTech Recycling</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
            Give your old electronics a second life while protecting the environment.
            Join us in our mission to reduce e-waste and build a cleaner, greener tomorrow.
          </p>
          <Link
            to="/book-pickup"
            className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300"
          >
            🚛 Book a Free Pickup
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <motion.img
            src={recycle1}
            alt="Recycling"
            className="w-full max-w-md rounded-xl shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
