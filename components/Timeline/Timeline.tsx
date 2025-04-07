"use client";
import React, { useState } from "react";

const timelineData = [
  { year: "2019", description: "We founded Gleeworld in 2019, our ambition was clear; to expand rapidly to major cities in Nigeria, Africa, and other parts of the world. We started with one store in Lekki phase 1, a highbrow area of Lagos, which also serves as our business office and inventory location." },
  { year: "2020", description: "Gleeworld launched its online platform. The company also actively participated in the fight against the Covid-19 pandemic by delivering medicines to doorsteps within its community." },
  { year: "2021", description: "Gleeworld developed its AI-powered inventory software. The company received recognition as a top 10 early-stage startup in Nigeria by the INOVO Accelerator (UK-Nigeria Tech Hub) and was accepted into the Startupbootcamp Accelerator, Amsterdam the leading accelerator program in Europe." },
  { year: "2022", description: "Gleeworld secured two prestigious fellowships in Europe and the USA." },
  { year: "2023", description: " Gleeworld began the development of Medfinder." },
  { year: "2024", description: "Gleeworld celebrated its 5th anniversary (#GleeworldAt5)." },
  { year: "2025", description: "Gleeworld launched the Medfinder App." }
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
