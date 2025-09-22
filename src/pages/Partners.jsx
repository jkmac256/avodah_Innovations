import React from "react";

import Agatha from "../assets/images/Agatha.png";
import Victor_1 from "../assets/images/Victor_1.png";
import Victor_2 from "../assets/images/Victor_2.png";
import Sheila from "../assets/images/Sheila.png";
import Crochets from "../assets/images/Crochets.png";
import Athomas from "../assets/images/Athomas.png";
import Athomas_pdct from "../assets/images/Athomas_pdct.png";
import robotics from "../assets/images/robotics.png";
import Banana_crisps from "../assets/images/Banana_crisps.png";

function Card({ title, children }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <h4 className="font-bold text-lg mb-2 text-center">{title}</h4>
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

export default function Partners() {
  const successStories = [
    {
      title: "Mugambe Victor",
      text: `Innovator supported at Avodah Park to transform microbes into biodegradable plastics.  
      His work is now shaping the future of eco-friendly packaging in Uganda.`,
      images: [Victor_1,Victor_2,],
    },
    {
      title: "Crochet Youth Group",
      text: `A youth-led initiative incubated at Avodah Park, turning waste into fashion through creative crochet designs. 
      They now employ and train other young women in the community.`,
      images: [Sheila,Crochets,],
    },
    {
      title: "Athomas",
      text: `Nanoparticle gel developed by Eluid Chelangat & Mutyaba Ronald. 
      A cutting-edge solution for topical treatments with enhanced absorption and healing properties.`,
      images: [Athomas,Athomas_pdct,],
    },
    {
      title: "Agatha Asasira",
      text: `High school scientist creating Agliss Lip Balm, a natural skincare product that promotes local ingredients and youth entrepreneurship.`,
      images: [Agatha],
    },
    {
      title: "Junior Joel",
      text: `Demonstrating an innovative robotics project designed to automate simple tasks and teach STEM skills to youth.`,
      images: [robotics],
    },
    {
      title: "Dr Joseph",
      text: `Entrepreneur producing banana crisps using sustainable farming techniques, creating local jobs and promoting healthy snacks.`,
      images: [Banana_crisps],
    },
  ];

  return (
    <section
      id="partners"
      className="min-h-screen px-6 py-12 max-w-6xl mx-auto space-y-16"
    >
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-4">Our Partners</h2>
        <p className="text-gray-700">
          Avodah Innovations works with a wide range of partners and customers
          to create sustainable, health-boosting, and future-ready solutions.
          Our collaborations ensure that innovation moves from{" "}
          <span className="font-semibold">labs → markets → communities</span>.
        </p>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">
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
        <h3 className="text-2xl font-bold mb-12 text-center">
          Success Stories
        </h3>

        <div className="space-y-16">
          {successStories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">{story.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{story.text}</p>
              </div>

              {/* Images */}
              <div className="flex-1 flex gap-4">
                {story.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${story.title} Image ${idx + 1}`}
                    className="w-1/2 h-64 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logos placeholder */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Partner Logos</h3>
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
        <p className="mt-4 text-sm text-gray-600">
          (We’ll add real partner logos here as soon as we finalize the brand
          assets.)
        </p>
      </div>
    </section>
  );
}
