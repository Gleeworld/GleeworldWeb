"use client"

import { useState } from "react"
import Image from "next/image"
import { FiMenu, FiX } from "react-icons/fi"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  // WhatsApp phone number - replace with the actual pharmacist's number
  const pharmacistNumber = "1234567890" // Replace with your actual WhatsApp number

  // Function to open WhatsApp chat
  const openWhatsAppChat = () => {
    // WhatsApp API URL format
    const whatsappUrl = `https://wa.me/${pharmacistNumber}`
    // Open in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo (1) 3.png" alt="Gleeworld Logo" width={100} height={140} className="cursor-pointer" />
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

        {/* Chat Button & WhatsApp Icon - Now clickable */}
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
        className={`md:hidden bg-white absolute top-16 left-0 w-full shadow-md transition-all duration-300 ${
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

