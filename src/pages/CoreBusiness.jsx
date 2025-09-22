import React from "react";

// Import images
import Victor_2 from "../assets/images/Victor_2.png";
import product_1 from "../assets/images/product_1.png";
import Avodah_7 from "../assets/images/Avodah_7.png";
import Avodah_6 from "../assets/images/Avodah_6.png";

function Section({ title, text, img, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 mb-12`}
    >
      {/* Text */}
      <div className="md:w-1/2">
        <h4 className="text-2xl font-bold mb-4 text-gray-800">{title}</h4>
        <p className="text-gray-700 text-base leading-relaxed">{text}</p>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-gray-500">[ Image coming soon ]</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CoreBusiness() {
  const domains = [
    {
      title: "Bioplastics & Polymers",
      text: "We produce biodegradable alternatives to petroleum-based plastics using agricultural waste such as cassava starch, banana peels, maize husks, and sugarcane bagasse. Our portfolio includes PHAs, pullulan, xanthan gum, and eco-friendly packaging materials. By transforming waste into value, we reduce environmental pollution and promote circular bioeconomy practices across Africa.",
      img: Victor_2,
    },
    {
      title: "Industrial Enzymes & Fermentation",
      text: "Our industrial enzyme solutions include cellulase, protease, lipase, amylase, and phytase, supported by microbial fermentation products. These innovations enhance animal feed efficiency, improve industrial processes, and support sustainable farming practices. Through fermentation technology, we enable local production of high-value biological products.",
      img: Victor_2,
    },
    {
      title: "Herbal-Based Innovations",
      text: "Leveraging Uganda’s rich biodiversity, we develop herbal-enzyme supplements, functional foods, personal care products, and cosmetics. Drawing from plants like Moringa, Aloe vera, turmeric, and neem, we transform traditional remedies into scientifically validated, market-ready solutions that enhance wellness and nutrition.",
      img: product_1,
    },
    {
      title: "Drug Discovery Solutions",
      text: "We screen microbes and plants for novel bioactive compounds using AI-driven computational platforms, molecular docking, machine learning, and whole genome sequencing. Our work focuses on antimicrobial resistance (AMR), cancer, protozoal diseases, and metabolic disorders, enabling locally developed therapeutics and accelerating global drug discovery efforts.",
      img: Avodah_7,
    },
    {
      title: "Rapid Diagnostics",
      text: "We design LAMP and CRISPR-based point-of-care diagnostics for tuberculosis, AMR pathogens, STIs, fungal infections, malaria, typhoid, and brucellosis. By making diagnostics affordable, accurate, and locally manufacturable, we empower African communities to detect and respond to diseases quickly and effectively.",
      img: Avodah_6,
    },
  ];

  return (
    <section id="domains" className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-center">
        Our Core Business
      </h3>
      <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto text-lg leading-relaxed">
        Avodah Innovations works across five interconnected domains that address
        urgent global challenges while unlocking Africa’s potential. Each domain
        represents an opportunity to create sustainable solutions, transform
        communities, and empower youth.
      </p>

      {/* Sections with alternating layout */}
      {domains.map((domain, index) => (
        <Section
          key={index}
          title={domain.title}
          text={domain.text}
          img={domain.img}
          reverse={index % 2 !== 0} // alternate layout
        />
      ))}
    </section>
  );
}
