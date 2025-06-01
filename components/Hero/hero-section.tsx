// GleeworldWeb/components/Hero/hero-section.tsx

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1585435557343-3b0920377ce0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Smiling female pharmacist
    heading: 'Welcome to Gleeworld Pharmacy',
    subheading: 'Your Dose of Happiness',
    pitch: 'Your trusted partner for all your pharmaceutical needs.',
    cta1Text: 'Shop Now',
    cta1Link: '#shop',
    cta2Text: 'Learn More',
    cta2Link: '#learn',
    bgColor: '#FF0066', // Magenta
  },
  {
    image:
      'https://images.unsplash.com/photo-1628343929420-988358896b0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Team of pharmacists
    heading: 'Trusted by 100+ Pharmacies',
    subheading: 'Supporting communities across Nigeria',
    pitch: 'Join our growing network and empower your pharmacy.',
    cta1Text: 'Join Our Network',
    cta1Link: '#network',
    bgColor: '#FF9933', // Orange
  },
  {
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38fd72c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Person using mobile phone
    heading: 'Find Medicine Fast',
    subheading: 'Try the Medfinder App',
    pitch: 'Locate the medications you need quickly and easily with our innovative app.',
    cta1Text: 'Download App',
    cta1Link: '#app',
    bgColor: '#C0C0C0', // Silver
  },
  {
    image:
      'https://images.unsplash.com/photo-1585435557343-3b0920377ce0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Small pharmacy owner smiling (reusing for demo)
    heading: 'Access Credit, Grow Faster',
    subheading: 'Flexible support for your pharmacy',
    pitch: 'Unlock opportunities with our tailored financial solutions.',
    cta1Text: 'Get Started',
    cta1Link: '#credit',
    bgColor: '#FF0066', // Magenta
  },
];

export default function FlowHero() {
  return (
    <section className="w-full h-[90vh] overflow-hidden relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000 }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                priority
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r z-10"
                style={{
                  background: `linear-gradient(to right, ${slide.bgColor}/80, transparent)`,
                }}
              ></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 px-8 md:px-20">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.heading}</h1>
                <p className="text-xl md:text-2xl font-semibold mb-2">{slide.subheading}</p>
                <p className="text-base md:text-lg max-w-xl mb-6">{slide.pitch}</p>
                <div className="flex gap-4">
                  {slide.cta1Text && (
                    <Link
                      href={slide.cta1Link}
                      className="bg-white text-[#FF0066] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                    >
                      {slide.cta1Text}
                    </Link>
                  )}
                  {slide.cta2Text && (
                    <Link
                      href={slide.cta2Link}
                      className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#FF0066] transition"
                    >
                      {slide.cta2Text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
