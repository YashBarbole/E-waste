import React from "react";

const articles = [
  {
    title: "Why Proper E-Waste Disposal Matters",
    summary: "Learn how improper e-waste disposal harms our environment and what you can do.",
  },
  {
    title: "Top 5 Recyclable Devices at Home",
    summary: "You’ll be surprised how many gadgets can (and should) be recycled responsibly.",
  },
  {
    title: "India's E-Waste Laws: Explained Simply",
    summary: "Understand your rights and responsibilities as a consumer or business.",
  },
];

const Awareness = () => {
  return (
    <section className="bg-white py-20 px-6 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">🧠 E-Waste Awareness</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((post, index) => (
          <div key={index} className="bg-green-50 rounded-xl shadow p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-green-900 mb-2">{post.title}</h3>
            <p className="text-gray-700 text-sm">{post.summary}</p>
            <button className="mt-4 text-green-600 font-medium hover:underline">Read More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awareness;
