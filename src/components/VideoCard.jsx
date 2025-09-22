// src/components/VideoCard.jsx
import React from "react";

export default function VideoCard({ title, description, videoUrl }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm text-gray-700 mt-1">{description}</p>
      </div>
    </div>
  );
}
