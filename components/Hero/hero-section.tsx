"use client";
import Image from 'next/image';

export default function FlowHero() {
  return (
    <section className="w-full h-screen relative">
      <Image
        src="/A_promotional_digital_graphic_for_Gleeworld_Pharma.png"
        alt="Gleeworld Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black/50">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Gleeworld Pharmacy</h1>
          <p className="text-lg md:text-2xl mt-4">Your Dose of Happiness</p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-full">Shop Now</button>
            <button className="bg-transparent border border-white px-6 py-2 rounded-full">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
