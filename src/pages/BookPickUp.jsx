import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const BookPickUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    items: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
    setFormData({ name: "", address: "", contact: "", items: "" });

    setTimeout(() => setSubmitted(false), 5000); // hide message after 5s
  };

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 transition-all duration-300 hover:shadow-green-200">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
          📦 Book an E-Waste Pickup
        </h2>

        {submitted && (
          <div className="flex items-center justify-center gap-2 bg-green-100 border border-green-300 text-green-800 p-4 mb-6 rounded-lg">
            <FaCheckCircle className="text-green-600 text-xl" />
            <p className="font-medium">Pickup booked successfully!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Pickup Address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Contact Number</label>
            <input
              type="tel"
              name="contact"
              placeholder="e.g. +91-9876543210"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Items for Pickup</label>
            <textarea
              name="items"
              placeholder="List the items (e.g. Laptop, Mobile Phone, Printer)"
              required
              rows="4"
              value={formData.items}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-transform transform hover:scale-105 duration-300"
          >
            🚚 Book Pickup Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookPickUp;
