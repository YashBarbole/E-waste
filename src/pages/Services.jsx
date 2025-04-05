import React from "react";
import { FaTruck, FaRecycle, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "E-Waste Pickup",
    icon: <FaTruck className="text-green-700 text-4xl mb-4" />,
    description:
      "Free doorstep collection of electronic waste from homes and offices.",
  },
  {
    title: "Certified Recycling",
    icon: <FaRecycle className="text-green-700 text-4xl mb-4" />,
    description:
      "Eco-friendly dismantling and recycling of electronic items with certification.",
  },
  {
    title: "Data Destruction",
    icon: <FaShieldAlt className="text-green-700 text-4xl mb-4" />,
    description:
      "Secure wiping of data from hard drives and digital storage devices.",
  },
];

const Services = () => {
  return (
    <section className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide environmentally responsible solutions for your electronic waste.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-green-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
