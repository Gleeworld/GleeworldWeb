"use client";
import Image from 'next/image';

export default function FlowHero() {
  return (
    <section className="relative w-full min-h-[600px] max-h-[700px] overflow-hidden">
      <Image
        src="/A_promotional_digital_graphic_for_Gleeworld_Pharma.png"
        alt="Gleeworld Hero"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Gleeworld Pharmacy</h1>
        <p className="text-lg md:text-xl mt-3">Your Dose of Happiness</p>
        <div className="mt-6 flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-full">Shop Now</button>
          <button className="bg-transparent border border-white px-6 py-2 rounded-full">Learn More</button>
        </div>
      </div>
    </section>
  );
}
