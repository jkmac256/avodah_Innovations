import React from "react";
import Avodah_6 from "../assets/images/Avodah_6.png";
import logo from "../assets/images/logo.png" 
import Avodah_5 from "../assets/images/Avodah_5.png";
import Avodah_7 from "../assets/images/Avodah_7.png";
import Avodah_3 from "../assets/images/Avodah_3.png";
import Product_2 from "../assets/images/Product_2.png";
import animal_house_2 from "../assets/images/animal_house_2.png";

function ServiceBlock({ title, text, img, reverse, width, height, titleSize, textSize }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8 mb-12`}
    >
      {/* Text */}
      <div className="md:w-1/2">
        <h4
          className={`font-bold mb-4 text-gray-800`}
          style={{ fontSize: titleSize || "3rem" }} // default 20px
        >
          {title}
        </h4>
        <p
          className="text-gray-700 leading-relaxed"
          style={{ fontSize: textSize || "1.5rem" }} // default 14px
        >
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

export default function Services() {
  const services = [
    {
      title: "Laboratory Services",
      text: "We provide comprehensive laboratory testing, including clinical chemistry, hematology, molecular diagnostics, and pharmaceutical analysis. Our labs are equipped to support healthcare providers, researchers, and innovators with accurate and timely results.",
      img: Avodah_6,
      width: "580px",
      height: "440px",
      titleSize: "3rem",
      textSize: "1.5rem",
    },
    {
      title: "Conference Hall",
      text: "Our state-of-the-art conference hall provides a venue for scientific meetings, innovation workshops, training sessions, and community events. It is designed to foster collaboration, knowledge sharing, and networking among innovators, researchers, and entrepreneurs.",
      img: Avodah_3,
      reverse: true,
      width: "520px",
      height: "360px",
    },
    {
      title: "Contract Manufacturing",
      text: "We are in process to aquire a lisence allowing us to be able to carry out contract manufacturing of herbal formulations, supporting innovators and companies to bring their products to market. Our GMP-compliant facilities aim to ensure high-quality production of safe, effective herbal remedies tailored to local and international standards.",
      img: Avodah_7,
      width: "540px",
      height: "400px",
    },
    {
      title: "Plant Analysis & Formulation",
      text: "From plant raw material to finished product, we offer phytochemical analysis, bioactivity screening, and formulation development. This service enables us to transform Uganda’s biodiversity into validated herbal medicines, nutraceuticals, and cosmetics.",
      img:logo,
      reverse: true,
      width: "520px",
      height: "360px",
    },
    {
      title: "In Vitro Studies",
      text: "Our in vitro research services allow testing of biological activity, safety, and efficacy of natural compounds and formulations. These studies provide critical preclinical data for product development, drug discovery, and academic research.",
      img: logo,
      width: "540px",
      height: "380px",
    },
    {
      title: "Animal Studies",
      text: "We conduct GLP-aligned animal studies for preclinical research and validation of new formulations. These studies are essential for testing safety, dosage, and therapeutic effects before moving innovations into human trials.",
      img: animal_house_2,
      reverse: true,
      width: "520px",
      height: "360px",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 max-w-6xl mx-auto"
    >
      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
        Our Services
      </h3>
      <p className="text-gray-700 text-base sm:text-lg lg:text-2xl text-center mb-12 max-w-3xl mx-auto">
        At Avodah Innovations, we provide a wide range of services that bridge
        research, innovation, and community transformation. From advanced
        laboratory testing to contract manufacturing and preclinical studies,
        our offerings are designed to support both scientific excellence and
        industry growth in Uganda and beyond.
      </p>

      {services.map((service, index) => (
        <ServiceBlock
          key={index}
          title={service.title}
          text={service.text}
          img={service.img}
          reverse={service.reverse}
          width={service.width}
          height={service.height}
          titleSize={service.titleSize}
          textSize={service.textSize}
        />
      ))}
    </section>
  );
}
