import React from "react";

export default function Feature({ title, text }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{text}</p>
    </div>
  );
}
