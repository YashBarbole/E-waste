import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const VisitUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zf33udp",
        "template_yc4ygov",
        form.current,
        "FGNZII9q8D_HF_fZx"
      )
      .then(
        (result) => {
          setSubmitted(true);
          form.current.reset();
          setTimeout(() => setSubmitted(false), 6000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send request. Please try again.");
        }
      );
  };

  return (
    <section className="px-4 py-20 min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
          🏢 Request a Visit
        </h2>

        {submitted && (
          <div className="mb-6 bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg text-center animate-fade-in">
            ✅ Thank you! We've received your request. You'll get a confirmation email shortly.
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div className="flex items-center gap-3">
            <FaUser className="text-green-700" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-green-700" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-green-700" />
            <input
              type="date"
              name="visit_date"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message or Reason for Visit"
            required
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          ></textarea>

          <input
            type="hidden"
            name="to_email"
            value="yashbarbole7110@gmail.com"
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-transform transform hover:scale-105 duration-300"
          >
            📩 Send Visit Request
          </button>
        </form>

        <div className="mt-10 text-center text-sm text-gray-600 border-t pt-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <FaMapMarkerAlt className="text-green-600" />
            <p>GreenTech Recycling, 123 E-Waste Lane, Pune, MH</p>
          </div>
          <p className="text-gray-500">
            <strong>Working Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
