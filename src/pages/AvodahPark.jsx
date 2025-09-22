import React from "react";

// Import images
import Avodah_6 from "../assets/images/Avodah_6.png";
import Animal_house from "../assets/images/animal_house.png";
import Avodah_1 from "../assets/images/Avodah_1.png";
import Victor_2 from "../assets/images/Victor_2.png";
import Banana_crisps from "../assets/images/Banana_crisps.png";
import Avodah_5 from "../assets/images/Avodah_5.png";
import meta_tv_2 from "../assets/images/meta_tv_2.png";
import ministry_in_secondary_schools from "../assets/images/ministry_in_secondary_schools.png";

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

export default function AvodahPark() {
  const sections = [
    {
      title: "Research Labs",
      text: "Equipped for microbiology, molecular biology, chemistry, hematology, immunohistochemistry, and pharmaceutical analysis. These labs allow young innovators and researchers to test and validate new products with international-level standards, enabling breakthroughs in biotech, medicine, and sustainable materials.",
      img: Avodah_6,
    },
    {
      title: "Animal House & Validation",
      text: "Our GLP-aligned animal house provides facilities for preclinical research, safety validation, and biosafety testing — crucial for advancing new therapeutics and diagnostics. It ensures that innovations meet rigorous ethical and scientific standards before reaching human trials or commercial application.",
      img: Animal_house,
    },
    {
      title: "Production & GMP Factory",
      text: "With GMP-compliant production lines, Avodah Park manufactures pharmaceuticals, nutraceuticals, cosmetics, and biodegradable plastics. Locally sourced agro-waste is transformed into high-value products, fostering circular economy practices and promoting sustainable entrepreneurship.",
      img: Avodah_1,
    },
    {
      title: "Fermentation Block",
      text: "This specialized unit scales up microbial products like enzymes, probiotics, organic acids, and glucose. By leveraging fermentation technologies, we reduce dependency on imported raw materials while promoting locally manufactured bio-products for food, health, and industrial applications.",
      img: Victor_2,
    },
    {
      title: "Innovation Kitchen",
      text: "A hands-on pilot facility where youth and startups experiment with functional foods, herbal formulations, and nutraceuticals. It bridges science, culinary creativity, and entrepreneurship, encouraging local solutions to nutrition and wellness challenges.",
      img: Banana_crisps,
    },
    {
      title: "Training & Incubation",
      text: "Avodah Park hosts classrooms, auditoriums, and incubation hubs for training in biotechnology, entrepreneurship, and grant writing. Startups and students gain mentorship, access to networks, and hands-on guidance to accelerate innovation from concept to market-ready products.",
      img: Avodah_5,
    },
    {
      title: "MetaTV Studios",
      text: "MetaTV, our broadcasting and storytelling arm, connects innovators to investors, consumers, and communities through live shows, documentaries, and campaigns. It amplifies science communication and showcases African solutions on regional and global platforms.",
      img: meta_tv_2,
    },
    {
      title: "Community & Wellness Spaces",
      text: "Avodah Park is designed for people, not just research. Cafeterias, wellness centers, and collaborative spaces host hackathons, innovation camps, and youth awards, nurturing creativity, health, and social impact.",
      img: ministry_in_secondary_schools,
    },
    {
      title: "Computer Centre",
      text: "A modern facility providing access to AI tools, computational platforms, and digital design resources. It supports cutting-edge research, digital innovation, and skill development for students, researchers, and entrepreneurs alike.",
      img: meta_tv_2,
    },
  ];

  return (
    <section id="park" className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-center">
        Avodah Park – Our Home and Hub
      </h3>
      <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Avodah Park is a multi-functional ecosystem owned and managed by Avodah
        Innovations. It integrates research, innovation, training, production, 
        and commercialization under one roof — accelerating the journey from{" "}
        <span className="font-semibold">idea to impact</span>. As a unique hub 
        in East Africa, it empowers youth, transforms communities, and drives 
        Africa’s bioeconomy.
      </p>

      {/* Sections with alternating layout */}
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          text={section.text}
          img={section.img}
          reverse={index % 2 !== 0} // alternate layout
        />
      ))}

      {/* Pipeline */}
      <div className="mt-16 text-center">
        <h4 className="font-semibold text-xl mb-2">The Avodah Park Pipeline</h4>
        <p className="text-gray-600 text-base">
          Idea → Research → Validation → Production → Promotion → Community Impact
        </p>
      </div>
    </section>
  );
}
