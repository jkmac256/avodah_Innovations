import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur border-t shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: copyright */}
        <div className="text-center md:text-left text-sm text-gray-600">
          © {new Date().getFullYear()} Avodah Innovations — Mbarara City, Uganda
        </div>

        {/* Right: links */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm text-gray-700">
          <Link
            to="/privacy"
            className="hover:text-green-700 transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="hover:text-green-700 transition-colors duration-200"
          >
            Terms
          </Link>
          <Link
            to="/media-kit"
            className="hover:text-green-700 transition-colors duration-200"
          >
            Media Kit
          </Link>
        </div>
      </div>

      {/* Optional: small note for mobile */}
      <div className="text-center text-xs text-gray-400 mt-2 md:hidden">
        Designed by Avodah Innovations
      </div>
    </footer>
  );
}
