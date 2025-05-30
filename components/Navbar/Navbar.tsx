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
    <header className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Links */}
        <div className="flex items-center space-x-10">
          <div 
            className="relative h-10 w-32 cursor-pointer"
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

          <nav className="hidden md:flex space-x-8 text-gray-800 font-medium text-base">
            <span onClick={() => router.push("/")} className="hover:text-orange-500 cursor-pointer">Home</span>
            <span onClick={() => router.push("/services")} className="hover:text-orange-500 cursor-pointer">Services</span>
            <span onClick={() => router.push("/medfinderapp")} className="hover:text-orange-500 cursor-pointer">Medfinder App</span>
            <span onClick={() => router.push("/news")} className="hover:text-orange-500 cursor-pointer">News</span>
            <span onClick={() => router.push("/about")} className="hover:text-orange-500 cursor-pointer">About Us</span>
          </nav>
        </div>

        {/* Chat & Hamburger */}
        <div className="flex items-center space-x-4">
          <div
            className="hidden md:flex border border-green-300 px-3 py-1.5 rounded-full bg-green-500 items-center space-x-2 cursor-pointer hover:bg-green-600 transition"
            onClick={openWhatsAppChat}
          >
            <p className="text-white text-sm">Chat with Pharmacist</p>
            <Image src="/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={20} height={20} />
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4">
          {["/", "/services", "/medfinderapp", "/news", "/about"].map((path, i) => (
            <p
              key={i}
              onClick={() => {
                router.push(path)
                setMenuOpen(false)
              }}
              className="text-gray-800 font-medium text-base cursor-pointer hover:text-orange-500"
            >
              {["Home", "Services", "Medfinder App", "News", "About Us"][i]}
            </p>
          ))}
          <div
            className="flex items-center space-x-2 px-3 py-2 rounded-full bg-green-500 w-fit cursor-pointer hover:bg-green-600 transition"
            onClick={openWhatsAppChat}
          >
            <p className="text-white text-sm">Chat with Pharmacist</p>
            <Image src="/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={20} height={20} />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
