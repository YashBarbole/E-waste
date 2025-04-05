import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const VisitUs = () => {
  const form = useRef();

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
          alert(
            "✅ Thank you! We've received your visit request. A confirmation has been sent to your email, along with our manager's contact."
          );
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send request. Please try again.");
        }
      );
  };

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-green-50 to-green-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Request a Visit
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="date"
            name="visit_date"
            placeholder=" Enter Visit date "
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Your Message or Reason for Visit"
            required
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>

          {/* EmailJS requires a field that matches the `to_email` variable in your EmailJS template */}
          <input
            type="hidden"
            name="to_email"
            value="yashbarbole7110@gmail.com"
          />

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded shadow"
          >
            Send Visit Request
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Or visit us at:
          <br />
          <strong>GreenTech Recycling</strong>
          <br />
          123 E-Waste Lane, Pune, MH
          <br />
          <strong>Working Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM
          <br />
         
        </div>
      </div>
    </section>
  );
};

export default VisitUs;