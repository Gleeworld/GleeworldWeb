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
      <div className="max-w-7xl mx-auto pl-0 pr-6 flex justify-between items-center h-24">
        {/* Logo */}
        <div 
          className="relative h-16 w-40 cursor-pointer" 
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => router.push("/")}>
              Home
            </li>
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => router.push("/services")}>
              Services
            </li>
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => router.push("/medfinderapp")}>
              Medfinder App
            </li>
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => router.push("/news")}>
              News
            </li>
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => router.push("/about")}>
              About Us
            </li>
          </ul>
        </nav>

        {/* Chat Button & WhatsApp Icon */}
        <div
          className="hidden md:flex border border-green-300 p-2 rounded-lg bg-green-500 items-center space-x-3 cursor-pointer hover:bg-green-600 transition-colors"
          onClick={openWhatsAppChat}
        >
          <p className="text-white font-medium">Chat with Pharmacist</p>
          <Image src="/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={30} height={30} />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white absolute top-24 left-0 w-full shadow-md transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          <li className="text-gray-700 hover:text-orange-500 cursor-pointer" onClick={() => router.push("/")}>
            Home
          </li>
          <li className="text-gray-700 hover:text-orange-500 cursor-pointer" onClick={() => router.push("/services")}>
            Services
          </li>
          <li
            className="text-gray-700 hover:text-orange-500 cursor-pointer"
            onClick={() => router.push("/medfinderapp")}
          >
            Medfinder App
          </li>
          <li className="text-gray-700 hover:text-orange-500 cursor-pointer" onClick={() => router.push("/news")}>
            News
          </li>
          <li className="text-gray-700 hover:text-orange-500 cursor-pointer" onClick={() => router.push("/about")}>
            About Us
          </li>
          <li
            className="flex items-center space-x-3 p-2 rounded-lg bg-green-500 cursor-pointer hover:bg-green-600 transition-colors"
            onClick={openWhatsAppChat}
          >
            <p className="text-white font-medium">Chat with Pharmacist</p>
            <Image src="/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={30} height={30} />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
