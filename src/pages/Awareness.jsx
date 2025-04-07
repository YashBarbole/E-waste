import React from "react";
import articleImg1 from "../assets/article1.png";
import articleImg2 from "../assets/article2.jpeg";
import articleImg3 from "../assets/article3.jpg";

const articles = [
  {
    title: "Why Proper E-Waste Disposal Matters",
    summary: "Learn how improper e-waste disposal harms our environment and what you can do.",
    image: articleImg1,
  },
  {
    title: "Top 5 Recyclable Devices at Home",
    summary: "You’ll be surprised how many gadgets can (and should) be recycled responsibly.",
    image: articleImg2,
  },
  {
    title: "India's E-Waste Laws: Explained Simply",
    summary: "Understand your rights and responsibilities as a consumer or business.",
    image: articleImg3,
  },
];

const Awareness = () => {
  return (
    <section className="bg-white py-20 px-6 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">🧠 E-Waste Awareness</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((post, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">{post.title}</h3>
              <p className="text-gray-700 text-sm">{post.summary}</p>
              <button className="mt-4 text-green-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awareness;
