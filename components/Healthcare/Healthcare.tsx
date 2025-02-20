import React from "react";
import { FaShippingFast, FaHeart, FaBrain, FaClock } from "react-icons/fa";

const features = [
  {
    title: "Faster",
    description: "Skip the pharmacy lines! Order your meds with a tap and get them delivered to your door. We partner with independent pharmacies to ensure they’re well-equipped to serve you.",
    icon: <FaShippingFast className="text-blue-600 text-2xl" />,
  },
  {
    title: "Kinder",
    description: "We care about you and the planet. Talk to our friendly pharmacists via text, call, email, or chat. We use eco-friendly packaging to minimize our environmental impact.",
    icon: <FaHeart className="text-blue-600 text-2xl" />,
  },
  {
    title: "Smarter",
    description: "Never miss a refill again. Gleeworld keeps track so you don’t have to.",
    icon: <FaBrain className="text-blue-600 text-2xl" />,
  },
  {
    title: "Efficient",
    description: "Fast response for insurance! We work seamlessly with insurance partners to ensure speedy processing of your medication orders.",
    icon: <FaClock className="text-blue-600 text-2xl" />,
  },
];

const HealthcareFeatures = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900">How We Do Healthcare Differently</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center p-4 bg-white shadow rounded-lg">
            <div className="p-3 bg-blue-100 rounded-full">{feature.icon}</div>
            <div className="ml-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareFeatures;
