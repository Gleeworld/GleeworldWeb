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
    <div className="relative w-full h-screen bg-gradient-to-br from-[#FF9933] via-[#FF0066] to-[#C0C0C0] overflow-hidden">
      
      {/* Background Capsules */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <ellipse cx="200" cy="120" rx="160" ry="60" fill="#FF9933" opacity="0.35" />
        <ellipse cx="600" cy="200" rx="250" ry="90" fill="#FF0066" opacity="0.35" />
        <ellipse cx="1000" cy="100" rx="200" ry="80" fill="#C0C0C0" opacity="0.35" />
        <ellipse cx="300" cy="500" rx="230" ry="85" fill="#FF0066" opacity="0.25" />
        <ellipse cx="800" cy="420" rx="200" ry="70" fill="#FF9933" opacity="0.3" />
        <ellipse cx="1200" cy="300" rx="190" ry="75" fill="#C0C0C0" opacity="0.3" />
      </svg>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow mb-4">
          Welcome to Gleeworld Pharmacy
        </h1>
        <p className="text-white text-xl md:text-2xl mb-2 drop-shadow">
          Your Dose of Happiness
        </p>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow">
          Empowering wellness, one smile at a time.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleWhatsAppChat}
            className="bg-white text-[#FF0066] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-100 transition"
          >
            Shop Now
          </button>
          <button
            onClick={() => router.push("/about")}
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-[#FF0066] transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
