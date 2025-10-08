import React from "react";

import Agatha from "../assets/images/Agatha.png";
import Victor_1 from "../assets/images/Victor_1.png";
import Victor_2 from "../assets/images/Victor_2.png";
import Athomas from "../assets/images/Athomas.png";
import Athomas_pdct from "../assets/images/Athomas_pdct.png";
import robotics from "../assets/images/robotics.png";
import Banana_crisps from "../assets/images/Banana_crisps.png";

function Card({ title, children }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <h4 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 text-center">
        {title}
      </h4>
      <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-center">
        {children}
      </p>
    </div>
  );
}

export default function Partners() {
  const successStories = [
    {
      title: "Mugambe Victor",
      text: `Innovator supported at Avodah Park to transform microbes into biodegradable plastics. Through rigorous research, mentorship, and access to cutting-edge facilities, he has developed sustainable alternatives to conventional packaging. His work is now shaping the future of eco-friendly packaging in Uganda, reducing plastic pollution, creating green jobs, and inspiring a new generation of innovators committed to building a circular bioeconomy.`,
      images: [Victor_1, Victor_2],
    },
    {
      title: "Athomas",
      text: `Nanoparticle gel developed by Eluid Chelangat & Mutyaba Ronald. 
      A cutting-edge solution for topical treatments with enhanced absorption and healing properties.`,
      images: [Athomas, Athomas_pdct],
    },
    {
      title: "Agatha Asasira",
      text: `High school scientist creating Agliss Lip Balm, a natural skincare product that harnesses locally sourced ingredients and celebrates Uganda’s rich biodiversity. This initiative promotes youth entrepreneurship, encourages sustainable product development, teaches business and innovation skills, and empowers young people to turn their ideas into market-ready solutions that benefit both communities and the environment.`,
      images: [Agatha],
      size: "h-100 w-full"
    },
    {
      title: "Junior Joel",
      text: `Demonstrating an innovative robotics project designed to automate simple and repetitive tasks, while fostering creativity, critical thinking, and teamwork. This project equips youth with practical STEM skills, inspires problem-solving, encourages innovation, and empowers the next generation of engineers and technology leaders to design solutions that can positively impact their communities and industries.`,
      images: [robotics],
      size: "h-120 w-full"
    },
    {
      title: "Dr Joseph",
      text: `Entrepreneur producing banana crisps using sustainable farming techniques, creating local jobs, empowering smallholder farmers, promoting healthy and nutritious snacks, and contributing to Uganda’s agro-processing industry while fostering innovation and economic growth in the local community.`,
      images: [Banana_crisps],
      size: "h-100 w-full"
    },
  ];

  return (
    <section
      id="partners"
      className="min-h-screen px-4 md:px-6 lg:px-12 py-8 md:py-12 max-w-6xl mx-auto space-y-16"
    >
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Our Partners
        </h2>
        <p className="text-gray-700 text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Avodah Innovations works with a wide range of partners and customers
          to create sustainable, health-boosting, and future-ready solutions.
          Our collaborations ensure that innovation moves from{" "}
          <span className="font-semibold">labs → markets → communities</span>.
        </p>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          Partner Categories
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Manufacturers">
            Food, pharmaceutical, cosmetics, and packaging industries using our
            bioplastics, enzymes, and diagnostics.
          </Card>
          <Card title="Farmers & Cooperatives">
            Supplying agro-waste and benefiting from biofertilizers, feed
            enzymes, and new value chains.
          </Card>
          <Card title="Retailers & Consumers">
            Seeking affordable, sustainable, and health-boosting products.
          </Card>
          <Card title="Hospitals & Universities">
            Collaborating with us in diagnostics, drug discovery, and clinical
            validation.
          </Card>
          <Card title="NGOs & Governments">
            Working together on climate-smart, health-focused programs.
          </Card>
          <Card title="Youth & Startups">
            Benefiting from incubation, mentorship, and funding opportunities at
            Avodah Park.
          </Card>
        </div>
      </div>

      {/* Success Stories */}
      <div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-12 text-center">
          Success Stories
        </h3>

        <div className="space-y-16">
          {successStories.map((story, index) => {
            const isTwoImages = story.images.length === 2;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <h4 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2">
                    {story.title}
                  </h4>
                  <p className="text-gray-700 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                    {story.text}
                  </p>
                </div>

                {/* Images */}
                <div
                  className={`flex-1 flex ${
                    isTwoImages
                      ? "gap-4"
                      : "justify-center" // center if only one image
                  }`}
                >
                  {story.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${story.title} Image ${idx + 1}`}
                      className={`${
                        story.size ? story.size : isTwoImages ? "w-1/2" : "w-3/4 md:w-2/3 lg:w-1/2"
                      } object-cover rounded-lg shadow-md`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logos placeholder 
      <div className="text-center mt-12">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Partner Logos
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            Logo 1
          </div>
          <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            Logo 2
          </div>
          <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            Logo 3
          </div>
          <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            Logo 4
          </div>
        </div>
        <p className="mt-4 text-xs md:text-sm text-gray-600">
          (We’ll add real partner logos here as soon as we finalize the brand
          assets.)
        </p>
      </div>*/}
    </section>
  );
}
