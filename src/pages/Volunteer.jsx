import React, { useState } from "react";
import { FaUser, FaEnvelope, FaHandsHelping } from "react-icons/fa";

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
    <section className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen px-4 py-20 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold text-green-800 mb-4 text-center">
          🤝 Become a Volunteer
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Join our mission to spread awareness and promote responsible recycling.
        </p>

        {submitted && (
          <div className="mb-6 bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg text-center animate-fade-in">
            🎉 Thank you for signing up as a volunteer!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center gap-3">
            <FaUser className="text-green-600 text-lg" />
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-green-600 text-lg" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div className="flex items-start gap-3">
            <FaHandsHelping className="text-green-600 text-xl mt-2" />
            <textarea
              name="interest"
              rows="3"
              required
              placeholder="How would you like to contribute?"
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 duration-300"
          >
            🌍 Join the Movement
          </button>
        </form>
      </div>
    </section>
  );
};

export default Volunteer;
