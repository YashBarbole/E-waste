import React, { useState } from "react";

const BookPickup = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    items: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Pickup booked successfully!");
    console.log(formData);
  };

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
          📦 Book an E-Waste Pickup
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Pickup Address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Contact Number</label>
            <input
              type="tel"
              name="contact"
              placeholder="e.g. +91-9876543210"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Items for Pickup</label>
            <textarea
              name="items"
              placeholder="List the items (e.g. Laptop, Mobile Phone, Printer)"
              required
              rows="4"
              value={formData.items}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400"
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

export default BookPickup;
