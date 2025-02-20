"use client";
import React, { useState } from "react";

const timelineData = [
  { year: "2019", description: "We founded Gleeworld in 2019, our ambition was clear; to expand rapidly to major cities in Nigeria, Africa, and other parts of the world. We started with one store in Lekki phase 1, a highbrow area of Lagos, which also serves as our business office and inventory location." },
  { year: "2020", description: "Expanded to two new locations and launched our online pharmacy platform." },
  { year: "2021", description: "Integrated AI-powered medication reminders and telepharmacy services." },
  { year: "2022", description: "Reached 50,000+ customers and partnered with major healthcare providers." },
  { year: "2023", description: "Launched the Medfinder app and expanded nationwide." },
  { year: "2024", description: "Continuing innovation with AI-driven healthcare solutions." },
];

const Timeline = () => {
  const [activeYear, setActiveYear] = useState("2019");

  return (
    <div className="max-w-4xl mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Our History</h2>
      <div className="flex justify-center gap-4 py-6">
        {timelineData.map((item) => (
          <button
            key={item.year}
            className={`px-4 py-2 rounded-full transition ${
              activeYear === item.year ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveYear(item.year)}
          >
            {item.year}
          </button>
        ))}
      </div>

      <div className="mt-6 text-gray-700 text-lg px-6">
        {timelineData.find((item) => item.year === activeYear)?.description}
      </div>
    </div>
  );
};

export default Timeline;
