"use client"

import Image from "next/image"

export default function PictureSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative group">
          {/* Main Picture Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/5years 1.png"
              alt="Gleeworld Pharmacy - Your trusted healthcare partner"
              width={1200}
              height={600}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  Discover Our Story
                </h2>
                <p className="text-gray-200 text-base md:text-lg mb-6 drop-shadow-md">
                  Learn about our commitment to providing quality healthcare and exceptional service to our community.
                </p>

                {/* Know More Button */}
                <button className="group/btn inline-flex items-center gap-3 bg-white/90 hover:bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm">
                  <span>Know More About Us</span>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </section>
  )
}
