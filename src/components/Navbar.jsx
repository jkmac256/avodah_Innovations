import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Core Business", path: "/core-business" },
    { name: "Avodah Park", path: "/avodah-park" },
    { name: "MetaTV", path: "/metatv" },
    { name: "Partners", path: "/partners" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-sm bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg">A</div>
          <div>
            <h1 className="text-lg font-semibold">Avodah Innovations</h1>
            <p className="text-xs text-gray-600">Bioeconomy • Avodah Park • Youth Empowerment</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-green-700 ${location.pathname === item.path ? "text-green-700 font-semibold" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 border rounded-md text-sm bg-green-700 text-white"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur shadow-lg py-4 flex flex-col gap-3 px-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-left hover:text-green-700 ${location.pathname === item.path ? "text-green-700 font-semibold" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
