"use client"

export default function FlowHero() {
  return (
    <section className="relative w-full h-[90vh] max-h-[800px] overflow-hidden">
      {/* Smooth wave design matching the reference */}
      <div className="absolute bottom-0 left-0 w-full h-full z-0">
        {/* Pink background */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500 to-pink-600"></div>

        {/* Orange wave on top */}
        <div className="wave-container">
          <svg className="wave-svg" viewBox="0 0 1200 320" preserveAspectRatio="none">
            <path className="wave-path" d="M0,160 C300,100 400,200 600,150 C800,100 900,200 1200,140 L1200,0 L0,0 Z" />
          </svg>
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-2xl mb-4">Welcome to Gleeworld Pharmacy</h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-lg">Your Dose of Happiness</p>
        <div className="flex gap-4">
          <button className="bg-white text-pink-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl">
            Shop Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-500 transition-colors shadow-xl">
            Learn More
          </button>
        </div>
      </div>

      <style jsx>{`
        .wave-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .wave-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .wave-path {
          fill: url(#waveGradient);
          animation: waveAnimation 6s ease-in-out infinite;
        }

        @keyframes waveAnimation {
          0%, 100% {
            d: path("M0,160 C300,100 400,200 600,150 C800,100 900,200 1200,140 L1200,0 L0,0 Z");
          }
          50% {
            d: path("M0,140 C300,200 400,100 600,160 C800,200 900,100 1200,150 L1200,0 L0,0 Z");
          }
        }
      `}</style>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF8C00" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FFB347" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}
