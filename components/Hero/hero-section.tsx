"use client"

import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()

  const handleWhatsAppChat = () => {
    const phoneNumber = "08035787654"
    const message = encodeURIComponent("Hello, I'd like to chat with a pharmacist.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 -z-10">
        <svg viewBox="0 0 1440 600" className="w-full h-full">
          <path
            fill="#FFA500" // orange
            fillOpacity="1"
            d="M0,192L80,202.7C160,213,320,235,480,250.7C640,267,800,277,960,272C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <path
            fill="#FF00FF" // magenta
            fillOpacity="0.7"
            d="M0,256L120,272C240,288,480,320,720,314.7C960,309,1200,267,1320,245.3L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
          <path
            fill="#C0C0C0" // silver
            fillOpacity="0.6"
            d="M0,320L180,336C360,352,720,384,1080,373.3C1200,368,1320,352,1380,341.3L1440,331L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,720,0,480,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center h-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow mb-4">
          Welcome to Gleeworld Pharmacy
        </h1>
        <p className="text-xl md:text-2xl text-white mb-2 drop-shadow">
          Your Dose of Happiness
        </p>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 drop-shadow">
          Trusted by thousands. Empowering pharmacies. Delivering wellness every day.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleWhatsAppChat}
            className="bg-[#FF00FF] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition"
          >
            Shop Now
          </button>
          <button
            onClick={() => router.push("/about")}
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-[#FF00FF] transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
