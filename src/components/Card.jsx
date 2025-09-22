// src/components/Card.jsx
import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}
