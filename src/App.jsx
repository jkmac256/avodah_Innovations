import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import CoreBusiness from "./pages/CoreBusiness";
import AvodahPark from "./pages/AvodahPark";
import MetaTV from "./pages/MetaTV";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Media_kit from "./pages/Media kit";
import Privacy_Policy from "./pages/Privacy";
import Terms from "./pages/Terms";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {["/", "/about", "/core-business", "/avodah-park", "/metatv", "/partners", "/contact", "/services", "/media-kit", "/privacy", "/terms"].map((path, i) => {
          const Component = {
            "/": Home,
            "/about": About,
            "/core-business": CoreBusiness,
            "/avodah-park": AvodahPark,
            "/metatv": MetaTV,
            "/partners": Partners,
            "/contact": Contact,
            "/services": Services,
            "/media-kit": Media_kit,
            "/privacy": Privacy_Policy,
            "/terms": Terms
          }[path];

          return (
            <Route
              key={i}
              path={path}
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Component />
                </motion.div>
              }
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />

        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition-colors"
          >
            ↑
          </button>
        )}
      </div>
    </Router>
  );
}
