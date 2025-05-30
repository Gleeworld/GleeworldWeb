"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    const waves = [
      { color: "#ff6600", amplitude: 60, frequency: 0.008, speed: 0.025, offset: -80 },   // Orange
      { color: "#cc0099", amplitude: 55, frequency: 0.009, speed: 0.02, offset: -20 },    // Magenta
      { color: "#c0c0c0", amplitude: 50, frequency: 0.007, speed: 0.03, offset: 30 },     // Silver
      { color: "#ff3366", amplitude: 45, frequency: 0.012, speed: 0.015, offset: 80 }     // Deep Pink accent
    ]

    let time = 0

    const animate = () => {
      time += 0.05
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave) => {
        ctx.fillStyle = wave.color
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            wave.amplitude * Math.sin(x * wave.frequency + time * wave.speed) +
            wave.offset
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const handleWhatsAppChat = () => {
    const phoneNumber = "08035787654"
    const message = encodeURIComponent("Hello, I'd like to chat with a pharmacist.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full text-center px-4 pb-20">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-6">
          Welcome to Gleeworld Pharmacy
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-md mb-2">
          Your Dose of Happiness
        </p>
        <p className="text-lg md:text-xl text-white max-w-2xl drop-shadow-sm mb-6">
          Empowering health, connecting pharmacies, and delivering happiness—one dose at a time.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleWhatsAppChat}
            className="bg-white text-[#cc0099] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
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
