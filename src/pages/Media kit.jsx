import React from "react";

export default function MediaKit() {
  return (
    <section className="min-h-screen px-6 py-12 max-w-6xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Media Kit</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Everything the press and partners need to cover Avodah Innovations — logos, product images, founder photos, and key facts.
        </p>
      </div>

      {/* Logos */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Logos</h3>
        <p className="text-gray-700 mb-4">High-resolution logo downloads:</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="px-4 py-2 bg-green-700 text-white rounded-md">Logo PNG</a>
          <a href="#" className="px-4 py-2 bg-green-700 text-white rounded-md">Logo SVG</a>
        </div>
      </div>

      {/* Product Images */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Product & Project Images</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">Avodah Park</div>
          <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">MetaTV</div>
          <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">Bioplastics & Enzymes</div>
        </div>
      </div>

      {/* Founder Photo */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Founder Photos</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">Prof. Dr. Joel Bazira</div>
      </div>

      {/* Key Facts */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Key Facts</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li>10+ years of innovation in bioeconomy</li>
          <li>50+ youth entrepreneurs supported</li>
          <li>30+ local & international partnerships</li>
        </ul>
      </div>
    </section>
  );
}
