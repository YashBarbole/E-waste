import React from "react";
const Home = () => {
  return (
    <section className="bg-gradient-to-br from-green-100 to-green-200 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-green-900 leading-tight drop-shadow">
          Welcome to <span className="text-green-800">GreenTech Recycling</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Give your old electronics a second life while protecting the environment.
          Join us in our mission to reduce e-waste and build a cleaner, greener tomorrow.
        </p>

      

        <a
          href="/book-pickup"
          className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300"
        >
          🚛 Book a Free Pickup
        </a>
      </div>
    </section>
  );
};

export default Home;
