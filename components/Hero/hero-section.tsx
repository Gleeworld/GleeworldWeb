"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    let animationFrameId: number
    const waves = [
      { color: "#ff9933", amplitude: 50, frequency: 0.01, speed: 0.03, direction: 1 },
      { color: "#ff0066", amplitude: 60, frequency: 0.008, speed: 0.02, direction: -1 },
    ]

    let time = 0

    // Animation function
    const animate = () => {
      time += 0.05
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach((wave, index) => {
        ctx.fillStyle = wave.color
        ctx.beginPath()

        // Start path
        ctx.moveTo(0, canvas.height)

        // Draw wave
        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            wave.amplitude * Math.sin(x * wave.frequency + time * wave.speed * wave.direction) +
            (index === 0 ? -100 : 100)
          ctx.lineTo(x, y)
        }

        // Complete the path
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

  const handleShopNow = () => {
    router.push("/shop")
  }

  const handleWhatsAppChat = () => {
    // Replace with the pharmacy's actual WhatsApp number
    const phoneNumber = "08035787654"
    // Customize the pre-filled message
    const message = encodeURIComponent("Hello, I'd like to chat with a pharmacist.")
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full text-center px-4 py-10">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-6">
          Welcome to Gleeworld Pharmacy
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-md">Your Dose of Happiness</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div>
            <div>
              <button className="bg-white text-[#ff0066] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2">
                Shop Now
              </button>
            </div>
            
              <div onClick={handleWhatsAppChat} className="cursor-pointer">
                <span>Chat with Pharmacist</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push("/about")}
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
  )
}

