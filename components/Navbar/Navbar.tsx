"use client"

import Image from "next/image"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const openWhatsAppChat = () => {
    window.open("https://wa.me/yourwhatsapplink", "_blank")
  }

  return (
    <header className="w-full px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo and Links */}
        <div className="flex items-center space-x-20">
          <div 
            className="relative h-24 w-64 cursor-pointer" // Larger logo
            onClick={() => router.push("/")}
          >
            <Image
              src="/gleeworld-logo.png"
              alt="Gleeworld Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-14 text-gray-700 text-xl font-medium">
            <span
              onClick={() => router.push("/")}
              className="cursor-pointer hover:border-b-2 border-orange-500 transition duration-200"
            >
              Home
            </span>
            <span
              onClick={() => router.push("/services")}
              className="cursor-pointer hover:border-b-2 border-orange-500 transition duration-200"
            >
              Services
            </span>
            <span
              onClick={() => router.push("/medfinderapp")}
              className="cursor-pointer hover:border-b-2 border-orange-500 transition duration-200"
            >
              Medfinder App
            </span>
            <span
              onClick={() => router.push("/news")}
              className="cursor-pointer hover:border-b-2 border-orange-500 transition duration-200"
            >
              News
            </span>
            <span
              onClick={() => router.push("/about")}
              className="cursor-pointer hover:border-b-2 border-orange-500 transition duration-200"
            >
              About Us
            </span>
          </nav>
        </div>

        {/* WhatsApp Chat + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div
            className="hidden md:flex border px-5 py-2 rounded-full bg-green-500 items-center space-x-2 cursor-pointer"
            onClick={openWhatsAppChat}
          >
            <p className="text-white text-base">Chat with Pharmacist</p>
            <Image src="/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={22} height={22} />
          </div>

          <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-lg">
          {["/", "/services", "/medfinderapp", "/news", "/about"].map((path, i) => (
            <p
              key={i}
              onClick={() => {
                router.push(path)
                setMenuOpen(false)
              }}
              className="text-gray-700 font-medium cursor-pointer hover:border-b-2 border-orange-500 transition duration-200"
            >
              {["Home", "Services", "Medfinder App", "News", "About Us"][i]}
            </p>
          ))}
          <div
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500 w-fit cursor-pointer"
            onClick={openWhatsAppChat}
          >
            <p className="text-white text-base">Chat with Pharmacist</p>
            <Image src="/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={22} height={22} />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
