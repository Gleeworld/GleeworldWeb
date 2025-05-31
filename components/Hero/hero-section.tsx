// components/Hero/hero-section.tsx

'use client';

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
      'https://images.unsplash.com/photo-1588776814546-ec7e796b6e9f?auto=format&fit=crop&w=1400&q=80',
    heading: 'Welcome to Gleeworld Pharmacy',
    subheading: 'Your Dose of Happiness',
    pitch: 'Empowering 100+ pharmacies with fast, affordable solutions.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1580281658629-08b1fdc6b6b5?auto=format&fit=crop&w=1400&q=80',
    heading: 'Trusted by Hundreds',
    subheading: 'Reliable Care, Nationwide Reach',
    pitch: 'From urban centres to rural areas, we’ve got you covered.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1400&q=80',
    heading: 'Innovative Pharma Tech',
    subheading: 'Built for Community Pharmacies',
    pitch: 'Tech-powered tools to manage, grow, and scale easily.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1588776814180-52edbba34f02?auto=format&fit=crop&w=1400&q=80',
    heading: 'Your Pharmacy Partner',
    subheading: 'Affordable Drugs, Fast Delivery',
    pitch: 'Enabling better health outcomes every day.',
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0066]/80 via-[#FF9933]/70 to-slate-200/60 z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 px-8 md:px-20">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.heading}</h1>
                <p className="text-xl md:text-2xl font-semibold mb-2">{slide.subheading}</p>
                <p className="text-base md:text-lg max-w-xl mb-6">{slide.pitch}</p>
                <div className="flex gap-4">
                  <Link
                    href="#shop"
                    className="bg-white text-[#FF0066] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="#learn"
                    className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#FF0066] transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
