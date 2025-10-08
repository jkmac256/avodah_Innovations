import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Core Business", path: "/core-business" },
    { name: "Services", path: "/services" },
    { name: "MetaTV", path: "/metatv" },
    { name: "Partners", path: "/partners" },
        { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12">
              <img
                src={logo} 
                alt="Avodah Innovations Logo"
                className="w-full h-full object-contain"
              />
            </div>

          <div>
            <h1 className="text-sm sm:text-base md:text-lg font-semibold">Avodah Innovations</h1>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
              Bioeconomy • Avodah Park • Youth Empowerment
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6 items-center text-sm sm:text-base">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-green-700 transition-colors ${
                location.pathname === item.path ? "text-green-700 font-semibold" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-700 text-white rounded-md text-sm sm:text-base hover:bg-green-800 transition"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl sm:text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col gap-3 px-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-left text-gray-700 sm:text-base py-1.5 hover:text-green-700 transition ${
                location.pathname === item.path ? "text-green-700 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-3 sm:px-4 py-2 bg-green-700 text-white rounded-md text-sm sm:text-base text-center hover:bg-green-800 transition"
          >
            Get Involved
          </Link>
        </nav>
      </div>
    </header>
  );
}
