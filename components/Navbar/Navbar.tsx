"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const openWhatsAppChat = () => {
    window.open("https://wa.me/1234567890", "_blank")
  }

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li
              className="hover:text-orange-500 cursor-pointer"
              onClick={() => router.push("/")}
            >
              Home
            </li>
            <li
              className="hover:text-orange-500 cursor-pointer"
              onClick={() => router.push("/services")}
            >
              Services
            </li>
            <li
              className="hover:text-orange-500 cursor-pointer"
              onClick={() => router.push("/medfinderapp")}
            >
              Medfinder App
            </li>
            <li
              className="hover:text-orange-500 cursor-pointer"
              onClick={() => router.push("/news")}
            >
              News
            </li>
            <li
              className="hover:text-orange-500 cursor-pointer"
              onClick={() => router.push("/about")}
            >
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
          <Image
            src="/logos_whatsapp-icon.png"
            alt="WhatsApp Icon"
            width={30}
            height={30}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white absolute top-20 left-0 w-full shadow-md transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          <li
            className="text-gray-700 hover:text-orange-500 cursor-pointer"
            onClick={() => {
              router.push("/")
              setMenuOpen(false)
            }}
          >
            Home
          </li>
          <li
            className="text-gray-700 hover:text-orange-500 cursor-pointer"
            onClick={() => {
              router.push("/services")
              setMenuOpen(false)
            }}
          >
            Services
          </li>
          <li
            className="text-gray-700 hover:text-orange-500 cursor-pointer"
            onClick={() => {
              router.push("/medfinderapp")
              setMenuOpen(false)
            }}
          >
            Medfinder App
          </li>
          <li
            className="text-gray-700 hover:text-orange-500 cursor-pointer"
            onClick={() => {
              router.push("/news")
              setMenuOpen(false)
            }}
          >
            News
          </li>
          <li
            className="text-gray-700 hover:text-orange-500 cursor-pointer"
            onClick={() => {
              router.push("/about")
              setMenuOpen(false)
            }}
          >
            About Us
          </li>
          <li
            className="flex items-center space-x-3 p-2 rounded-lg bg-green-500 cursor-pointer hover:bg-green-600 transition-colors"
            onClick={() => {
              openWhatsAppChat()
              setMenuOpen(false)
            }}
          >
            <p className="text-white font-medium">Chat with Pharmacist</p>
            <Image
              src="/logos_whatsapp-icon.png"
              alt="WhatsApp Icon"
              width={30}
              height={30}
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
