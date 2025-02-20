"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What are Telepharmacy Services?",
    answer:
      "Telepharmacy services allow patients to consult with licensed pharmacists remotely via video calls or chat, ensuring easy access to expert healthcare advice.",
  },
  {
    question: "What do Delivery Services Cover?",
    answer:
      "Our delivery service ensures that you receive your medications and health products at your doorstep, whether for personal use or for your business needs.",
  },
  {
    question: "What is Pharmaceutical Distribution?",
    answer:
      "Pharmaceutical distribution ensures that essential medications reach pharmacies, hospitals, and other healthcare providers efficiently and safely.",
  },
  {
    question: "What is the Medfinder App?",
    answer:
      "The Medfinder App helps users locate pharmacies, compare medicine prices, and order medications for delivery directly from their smartphones.",
  },
  {
    question: "How long does it take to deliver?",
    answer:
      "Delivery times vary based on your location, but most orders are fulfilled within 24-48 hours.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-center text-3xl font-bold text-gray-900">FAQ</h2>
      <p className="text-center text-gray-600 mb-6">Do you have questions?</p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-gray-500">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
