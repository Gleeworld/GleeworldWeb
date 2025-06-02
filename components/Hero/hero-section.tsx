'use client';
import Image from 'next/image';

export default function FlowHero() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/A_promotional_digital_graphic_for_Gleeworld_Pharma.png"
        alt="Gleeworld Pharmacy Hero"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Gleeworld Pharmacy
        </h1>
        <p className="text-lg md:text-2xl mb-6 font-light">
          Your Dose of Happiness
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-[#FF0066] hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
            Shop Now
          </button>
          <button className="bg-white hover:bg-gray-200 text-[#FF0066] font-semibold py-3 px-6 rounded-full shadow-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
