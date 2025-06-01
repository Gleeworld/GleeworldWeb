// components/Hero/Hero1.tsx
"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero1 = () => {
  const router = useRouter();

  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Gleeworld Hero Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0066]/70 via-[#FF9933]/60 to-white/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          Welcome to Gleeworld Pharmacy
        </h1>
        <p className="text-white text-xl mt-4 mb-6 font-medium">
          Your Dose of Happiness
        </p>

        {/* Catchy Pitch Line */}
        <p className="text-white text-lg md:text-xl mb-8">
          Trusted by 100+ pharmacies, delivering wellness with a smile.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => router.push("/shop")}
            className="bg-white text-[#FF0066] font-semibold px-6 py-3 rounded-full hover:bg-[#FF9933] hover:text-white transition"
          >
            Shop Now
          </button>
          <button
            onClick={() => router.push("/about")}
            className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#FF0066] transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
