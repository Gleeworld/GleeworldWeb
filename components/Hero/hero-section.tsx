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
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-400 via-pink-500 to-gray-300">
      {/* Decorative Capsules */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600">
          <ellipse cx="200" cy="100" rx="150" ry="50" fill="#FFA500" opacity="0.3" />
          <ellipse cx="600" cy="200" rx="200" ry="70" fill="#FF00FF" opacity="0.3" />
          <ellipse cx="1000" cy="150" rx="180" ry="60" fill="#C0C0C0" opacity="0.3" />
          <ellipse cx="400" cy="400" rx="220" ry="80" fill="#FFA500" opacity="0.3" />
          <ellipse cx="800" cy="350" rx="200" ry="70" fill="#FF00FF" opacity="0.3" />
          <ellipse cx="1200" cy="300" rx="180" ry="60" fill="#C0C0C0" opacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
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
            className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-100 transition"
          >
            Shop Now
          </button>
          <button
            onClick={() => router.push("/about")}
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-pink-600 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
