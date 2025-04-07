import React from "react";
import { FaTruck, FaRecycle, FaShieldAlt } from "react-icons/fa";
import truckImg from "../assets/truckImg.jpg";
import recycleImg from "../assets/recyclee.jpg";
import dataImg from "../assets/dataImg.jpg";

const services = [
  {
    title: "E-Waste Pickup",
    icon: <FaTruck className="text-green-700 text-4xl mb-4" />,
    description:
      "Free doorstep collection of electronic waste from homes and offices.",
    image: truckImg,
  },
  {
    title: "Certified Recycling",
    icon: <FaRecycle className="text-green-700 text-4xl mb-4" />,
    description:
      "Eco-friendly dismantling and recycling of electronic items with certification.",
    image: recycleImg,
  },
  {
    title: "Data Destruction",
    icon: <FaShieldAlt className="text-green-700 text-4xl mb-4" />,
    description:
      "Secure wiping of data from hard drives and digital storage devices.",
    image: dataImg,
  },
];

const Services = () => {
  return (
    <section className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-4 animate-fade-in">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-slow">
          We provide environmentally responsible solutions for your electronic waste.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-green-50 p-8 rounded-2xl shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out animate-slide-up"
            >
              <div className="flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-40 h-40 mb-4 object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-center">{service.icon}</div>
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
