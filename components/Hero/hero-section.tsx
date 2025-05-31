"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const slides = [
  {
    title: "Your Dose of Happiness",
    subtitle: "Trusted by 100+ pharmacies across Nigeria",
    image: "https://images.unsplash.com/photo-1588776814546-aeba1c27b5d9?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Empowering Community Pharmacies",
    subtitle: "Technology. Logistics. Financial Support.",
    image: "https://images.unsplash.com/photo-1576765607924-b80134888a6c?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "We Deliver Wellness",
    subtitle: "Fast access to medicines & health solutions.",
    image: "https://images.unsplash.com/photo-1588776814702-d61d4d8d23df?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Grow Your Pharmacy with Us",
    subtitle: "Join Gleeworld and scale your impact.",
    image: "https://images.unsplash.com/photo-1586275945090-977f07f4a373?auto=format&fit=crop&w=1470&q=80",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                <div className="flex space-x-4">
                  <button className="bg-[#FF9933] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#e57d10] transition">
                    Shop Now
                  </button>
                  <button className="bg-[#FF0066] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#cc0052] transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
