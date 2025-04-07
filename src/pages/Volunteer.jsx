import React, { useState } from "react";
import { FaUser, FaEnvelope, FaHandsHelping } from "react-icons/fa";
import volunteerImg from "../assets/volunteerss.jpg"; // Make sure this path is correct

const Volunteer = () => {
  const [form, setForm] = useState({ name: "", email: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", interest: "" });
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen px-4 py-12 sm:py-16 md:py-20 flex flex-col items-center">
      {/* 🖼️ Square Image at top */}
      <div className="w-full max-w-4xl mb-6 sm:mb-10 px-2 sm:px-4">
        <img
          src={volunteerImg}
          alt="Volunteer"
          className="w-full aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md sm:shadow-xl"
        />
      </div>

      {/* Form Card */}
      <div className="w-full max-w-xl bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl">
        <h2 className="text-2xl sm:text-4xl font-bold text-green-800 mb-4 text-center">
          🤝 Become a Volunteer
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-600 mb-6 sm:mb-8">
          Join our mission to spread awareness and promote responsible recycling.
        </p>

        {submitted && (
          <div className="mb-5 sm:mb-6 bg-green-100 border border-green-300 text-green-800 p-3 sm:p-4 rounded-md sm:rounded-lg text-center animate-fade-in text-sm sm:text-base">
            🎉 Thank you for signing up as a volunteer!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <FaUser className="text-green-600 text-base sm:text-lg" />
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <FaEnvelope className="text-green-600 text-base sm:text-lg" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            />
          </div>

          <div className="flex items-start gap-2 sm:gap-3">
            <FaHandsHelping className="text-green-600 text-lg mt-1 sm:mt-2" />
            <textarea
              name="interest"
              rows="3"
              required
              placeholder="How would you like to contribute?"
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2.5 sm:py-3 rounded-md sm:rounded-lg font-semibold transition-transform transform hover:scale-105 duration-300 text-sm sm:text-base"
          >
            🌍 Join the Movement
          </button>
        </form>
      </div>
    </section>
  );
};

export default Volunteer;
