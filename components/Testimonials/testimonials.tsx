
// src/components/Testimonials.tsx
'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: '1',
      text: 'Gleeworld Pharmacy has transformed our operations. Their technology tools are a game-changer for small pharmacies like ours.',
      author: 'Dr. Sarah Johnson',
    },
    {
      id: '2',
      text: 'The MedFinder app has made it incredibly easy for us to manage our inventory and connect with customers.',
      author: 'Michael Adebayo',
    },
    {
      id: '3',
      text: 'Outstanding service and support. Gleeworld truly understands the needs of independent pharmacies.',
      author: 'Grace Okonjo',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="text-4xl text-orange-500 absolute top-4 left-4">&apos;</div>
            <p className="text-lg text-gray-700 mb-4 pt-8">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-gray-600 font-medium">
              - {testimonials[currentIndex].author}
            </p>
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600"
            >
              ← Prev
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}