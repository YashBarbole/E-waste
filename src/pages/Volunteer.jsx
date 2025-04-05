import React, { useState } from "react";

const Volunteer = () => {
  const [form, setForm] = useState({ name: "", email: "", interest: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Thank you for signing up as a volunteer!");
    setForm({ name: "", email: "", interest: "" });
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen px-6 py-20">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">
          🤝 Become a Volunteer
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Join our mission to spread awareness and help recycle responsibly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          <textarea
            name="interest"
            rows="3"
            required
            placeholder="How would you like to contribute?"
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Join the Movement
          </button>
        </form>
      </div>
    </section>
  );
};

export default Volunteer;
