"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const openWhatsAppChat = () => {
    window.open("https://wa.me/2348123456789", "_blank");
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md z-50 relative">
      {/* Logo */}
      <div className="flex items-center space-x-4 cursor-pointer" onClick={() => router.push("/")}>
        <Image
          src="/gleeworld-logo.png"
          alt="Gleeworld Logo"
          width={140}
          height={80}
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

      {/* Chat Button */}
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
          <li className="text-gray-700 hover:text-orange-500 cursor-pointer" onClick={() => router.push("/medfinderapp")}>
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
  );
};

export default Navbar;

