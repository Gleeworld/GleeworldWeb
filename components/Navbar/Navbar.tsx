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
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        
        {/* Left side: Logo + Nav Links */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <div 
            className="relative h-12 w-36 cursor-pointer"
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

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
            <span onClick={() => router.push("/")} className="hover:text-orange-500 cursor-pointer">Home</span>
            <span onClick={() => router.push("/services")} className="hover:text-orange-500 cursor-pointer">Services</span>
            <span onClick={() => router.push("/medfinderapp")} className="hover:text-orange-500 cursor-pointer">Medfinder App</span>
            <span onClick={() => router.push("/news")} className="hover:text-orange-500 cursor-pointer">News</span>
            <span onClick={() => router.push("/about")} className="hover:text-orange-500 cursor-pointer">About Us</span>
          </nav>
        </div>

        {/* Right side: Chat Button or Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Chat button on desktop */}
          <div
            className="hidden md:flex border border-green-300 p-2 rounded-lg bg-green-500 items-center space-x-2 cursor-pointer hover:bg-green-600 transition-colors"
            onClick={openWhatsAppChat}
          >
            <p className="text-white font-medium text-sm">Chat with Pharmacist</p>
            <Image src="/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={24} height={24} />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white absolute top-20 left-0 w-full shadow-md transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-5 py-6 text-gray-700 font-medium text-lg">
          <li onClick={() => { router.push("/"); setMenuOpen(false) }} className="hover:text-orange-500 cursor-pointer">Home</li>
          <li onClick={() => { router.push("/services"); setMenuOpen(false) }} className="hover:text-orange-500 cursor-pointer">Services</li>
          <li onClick={() => { router.push("/medfinderapp"); setMenuOpen(false) }} className="hover:text-orange-500 cursor-pointer">Medfinder App</li>
          <li onClick={() => { router.push("/news"); setMenuOpen(false) }} className="hover:text-orange-500 cursor-pointer">News</li>
          <li onClick={() => { router.push("/about"); setMenuOpen(false) }} className="hover:text-orange-500 cursor-pointer">About Us</li>
          <li
            className="flex items-center space-x-2 p-2 rounded-lg bg-green-500 cursor-pointer hover:bg-green-600 transition-colors"
            onClick={openWhatsAppChat}
          >
            <p className="text-white font-medium text-sm">Chat with Pharmacist</p>
            <Image src="/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={24} height={24} />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
