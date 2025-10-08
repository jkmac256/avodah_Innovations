import React from "react";

// Import images
import Victor_2 from "../assets/images/Victor_2.png";
import product_1 from "../assets/images/product_1.png";
import Avodah_7 from "../assets/images/Avodah_7.png";
import Avodah_6 from "../assets/images/Avodah_6.png";
import Banana_crisps from "../assets/images/Banana_crisps.png";

function Section({ title, text, img, reverse, width, height }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-y-8 gap-x-12 mb-16`}
    >
      {/* Text */}
      <div className="md:w-1/2">
        <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
          {title}
        </h4>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-prose">
          {text}
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        {img ? (
          <img
            src={img}
            alt={title}
            style={{ width: width || "100%", height: height || "auto" }}
            className="object-cover rounded-lg shadow-md"
          />
        ) : (
          <div
            style={{ width: width || "100%", height: height || "auto" }}
            className="bg-gray-200 rounded-lg flex items-center justify-center shadow-md"
          >
            <span className="text-gray-500 text-sm md:text-base">
              [ Image coming soon ]
            </span>
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
      width: "540px",
      height: "640px",
    },
    {
      title: "Drug Discovery and Herbal-Based Innovations",
      text: "Leveraging Uganda’s rich biodiversity, we develop herbal-enzyme supplements, functional foods, personal care products, and cosmetics. Drawing from plants like Moringa, Aloe vera, turmeric, and neem, we transform traditional remedies into scientifically validated, market-ready solutions that enhance wellness and nutrition. We screen microbes and plants for novel bioactive compounds using AI-driven computational platforms, molecular docking, machine learning, and whole genome sequencing. Our work focuses on antimicrobial resistance (AMR), cancer, protozoal diseases, and metabolic disorders, enabling locally developed therapeutics and accelerating global drug discovery efforts.",
      img: product_1, Avodah_7,
      width: "520px",
      height: "650px",
    },
    {
      title: "Drug Discovery Solutions",
      text: "We screen microbes and plants for novel bioactive compounds using AI-driven computational platforms, molecular docking, machine learning, and whole genome sequencing. Our work focuses on antimicrobial resistance (AMR), cancer, protozoal diseases, and metabolic disorders, enabling locally developed therapeutics and accelerating global drug discovery efforts.",
      img: Avodah_7,
      width: "540px",
      height: "380px",
    },
    {
      title: "Rapid Diagnostics",
      text: "We design LAMP and CRISPR-based point-of-care diagnostics for tuberculosis, AMR pathogens, STIs, fungal infections, malaria, typhoid, and brucellosis. By making diagnostics affordable, accurate, and locally manufacturable, we empower African communities to detect and respond to diseases quickly and effectively.",
      img: Avodah_6,
      width: "500px",
      height: "350px",
    },
    {
      title: "Innovation Kitchen",
      text: "A hands-on pilot facility where youth and startups experiment with functional foods, herbal formulations, and nutraceuticals. It bridges science, culinary creativity, and entrepreneurship, encouraging local solutions to nutrition and wellness challenges.",
      img: Banana_crisps,
      width: "500px",
      height: "350px",
    },
  ];

  return (
    <section id="domains" className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        Our Core Business
      </h3>
      <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto text-xl md:text-lg lg:text-2xl leading-relaxed">
        Avodah Innovations works across six interconnected domains that address
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
          reverse={index % 2 !== 0}
          width={domain.width}
          height={domain.height}
        />
      ))}
    </section>
  );
}
