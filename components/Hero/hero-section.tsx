"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()

  const handleWhatsAppChat = () => {
    window.open("https://wa.me/yourwhatsapplink", "_blank")
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#ff0066") // Magenta
    gradient.addColorStop(1, "#ff9900") // Orange

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full h-full text-center px-4 mt-[120px]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-6">
          Welcome to Gleeworld Pharmacy
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-md">
          Your Dose of Happiness
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleWhatsAppChat}
            className="bg-white text-[#ff0066] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
          >
            Shop Now
          </button>
          <button
            onClick={() => router.push("/about")}
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
