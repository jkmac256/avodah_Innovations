import React from "react";
import Avodah_6 from "../assets/images/Avodah_6.png"; 
import Avodah_5 from "../assets/images/Avodah_5.png";
import Avodah_7 from "../assets/images/Avodah_7.png";
import Avodah_3 from "../assets/images/Avodah_3.png";
import Product_2 from "../assets/images/Product_2.png";
import animal_house_2 from "../assets/images/animal_house_2.png";

function ServiceBlock({ title, text, img, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 mb-12`}
    >
      {/* Text */}
      <div className="md:w-1/2">
        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
          {title}
        </h4>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
          {text}
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={img}
          alt={title}
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 max-w-6xl mx-auto"
    >
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Our Services
      </h3>
      <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-center mb-12 max-w-3xl mx-auto">
        At Avodah Innovations, we provide a wide range of services that bridge
        research, innovation, and community transformation. From advanced
        laboratory testing to contract manufacturing and preclinical studies,
        our offerings are designed to support both scientific excellence and
        industry growth in Uganda and beyond.
      </p>

      <ServiceBlock
        title="Laboratory Services"
        text="We provide comprehensive laboratory testing, including clinical chemistry, hematology, molecular diagnostics, and pharmaceutical analysis. 
              Our labs are equipped to support healthcare providers, researchers, and innovators with accurate and timely results."
        img={Avodah_5}
      />

      <ServiceBlock
        title="Conference Hall"
        text="Our state-of-the-art conference hall provides a venue for scientific meetings, innovation workshops, training sessions, and community events. 
              It is designed to foster collaboration, knowledge sharing, and networking among innovators, researchers, and entrepreneurs."
        img={Avodah_3}
        reverse
      />

      <ServiceBlock
        title="Contract Manufacturing"
        text="We specialize in contract manufacturing of herbal formulations, supporting innovators and companies to bring their products to market. 
              Our GMP-compliant facilities ensure high-quality production of safe, effective herbal remedies tailored to local and international standards."
        img={Avodah_7}
      />

      <ServiceBlock
        title="Plant Analysis & Formulation"
        text="From plant raw material to finished product, we offer phytochemical analysis, bioactivity screening, and formulation development. 
              This service enables us to transform Uganda’s biodiversity into validated herbal medicines, nutraceuticals, and cosmetics."
        img={Product_2}
        reverse
      />

      <ServiceBlock
        title="In Vitro Studies"
        text="Our in vitro research services allow testing of biological activity, safety, and efficacy of natural compounds and formulations. 
              These studies provide critical preclinical data for product development, drug discovery, and academic research."
        img={Avodah_6}
      />

      <ServiceBlock
        title="Animal Studies"
        text="We conduct GLP-aligned animal studies for preclinical research and validation of new formulations. 
              These studies are essential for testing safety, dosage, and therapeutic effects before moving innovations into human trials."
        img={animal_house_2}
        reverse
      />
    </section>
  );
}
