import React from "react";

// Import your images
import Avodah_3 from "../assets/images/Avodah_3.png";
import logo from "../assets/images/logo.png";
import meta_tv_3 from "../assets/images/meta_tv_3.png";
import Victor_1 from "../assets/images/Victor_1.png";
import Victor_2 from "../assets/images/Victor_2.png";
import Sheila from "../assets/images/Sheila.png";
import Crochets from "../assets/images/Crochets.png";

// Reusable Card
function Card({ title, children }) {
  return (
    <div className="p-6 sm:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">{title}</h4>
      <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

export default function Home() {
  const successStories = [
    {
      title: "Mugambe Victor",
      text: "An inspiring innovator who turned microbes into biodegradable plastics — supported by Avodah Park labs, mentorship, and a community of fellow changemakers who believed in his vision.",
      images: [Victor_1, Victor_2],
    },
    {
      title: "Crochet Youth Group",
      text: "A dynamic youth group that creatively transformed waste into fashionable products through Avodah Park incubation. Their journey reflects how passion, skills, and sustainability can merge to create livelihoods and dignity.",
      images: [Sheila, Crochets],
    },
  ];

  return (
    <section id="home" className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 space-y-24 max-w-6xl mx-auto">
      {/* 1. Hero */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Avodah Innovations
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Unleashing Uganda’s greatest asset: its{" "}
            <span className="font-semibold">youth</span> — to drive innovation,
            entrepreneurship, and global transformation. At Avodah, we believe
            that young people, equipped with knowledge and faith, can design
            solutions that impact the world.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="/core-business" className="px-6 py-3 bg-green-700 text-white rounded-md text-lg sm:text-xl text-center">
              Our Core Business
            </a>
            <a href="/avodah-park" className="px-6 py-3 border rounded-md text-lg sm:text-xl text-center">
              Avodah Park
            </a>
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden bg-gradient-to-tr from-green-50 to-white p-4 sm:p-8">
          <img src={logo} alt="Hero" className="w-full h-64 sm:h-80 md:h-[28rem] object-cover rounded-md" />
        </div>
      </div>

      {/* 2. Mission & Impact */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
        <Card title="Vision">
          To drive Africa’s transition toward a green, sustainable economy by turning agro-waste, herbs, and microbes into practical solutions that transform industries, strengthen communities, and inspire future generations.
        </Card>
        <Card title="Mission">
          Reduce plastic pollution, improve health, add value to agro-residues,
          and create jobs while empowering youth for the bioeconomy. Our mission
          is not only to innovate, but to ensure that innovation builds hope and
          prosperity for communities across Africa.
        </Card>
        <Card title="Impact">
          Hosted 20–40 young people during COVID-19 lockdowns, training them in
          innovation and faith-driven leadership. Today, many of them are running projects that solve real challenges in biotechnology, media, and beyond.
        </Card>
        <Card title="Success Story">
          Supported innovators like <span className="font-semibold">Mugambe Victor</span> in turning microbes into biodegradable plastics, showing how vision combined with support can spark global solutions.
        </Card>
      </div>

      {/* 3. Who We Are */}
      <div className="text-center max-w-4xl mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Who We Are</h3>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
          Avodah Innovations is a bioeconomy enterprise headquartered in Mbarara City, Uganda. We combine{" "}
          <span className="font-semibold">science, entrepreneurship, and community</span> — grounded in faith and integrity — to transform lives and empower Africa’s youth.
          We are more than an enterprise; we are a movement of innovators working together to shape a brighter future.
        </p>
      </div>

      {/* 4. Core Business Preview */}
      <div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">Our Core Business</h3>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <Card title="Bioplastics & Polymers">
            Biodegradable alternatives from cassava starch, banana peels, sugarcane bagasse — PHAs, pullulan, xanthan gum, eco-packaging. We aim to lead Africa in providing affordable and sustainable packaging solutions.
          </Card>
          <Card title="Industrial Enzymes & Fermentation">
            Enzymes (cellulase, protease, lipase, amylase, phytase) and fermentation products for feed, farming, and industry. These solutions reduce costs, improve efficiency, and unlock opportunities for local industries.
          </Card>
          <Card title="Herbal-Based Innovations">
            Nutraceuticals, functional foods, and cosmetics from Moringa, Aloe vera, turmeric, and neem. Our herbal solutions integrate traditional wisdom with modern science for global impact.
          </Card>
          <Card title="Drug Discovery & Diagnostics">
            AI-driven drug discovery + CRISPR/LAMP diagnostics for TB, malaria, AMR, and more. By merging technology and medicine, we are developing innovations that save lives and shape the future of healthcare.
          </Card>
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <a href="/core-business" className="px-6 py-3 bg-green-700 text-white rounded-md text-lg sm:text-xl">
            Explore More
          </a>
        </div>
      </div>

      {/* 5. Avodah Park Preview */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-center">
        <div>
          <img src={Avodah_3} alt="Avodah Park" className="w-full h-64 sm:h-80 md:h-[26rem] object-cover rounded-lg shadow-md" />
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Avodah Park</h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Our integrated hub for research, validation, production, training, and promotion — providing the full pipeline from{" "}
            <span className="font-semibold">Idea → Impact</span>. Avodah Park is where creativity meets execution, turning dreams into tangible solutions for Africa and beyond.
          </p>
          <a href="/avodah-park" className="mt-4 sm:mt-6 inline-block px-6 py-3 border rounded-md text-lg sm:text-xl">
            Explore Avodah Park
          </a>
        </div>
      </div>

      {/* 6. MetaTV Preview */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">MetaTV</h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Our digital media platform that tells the stories of innovators, connects them with investors, and trains youth in storytelling and digital marketing. MetaTV is not just a channel; it is a launchpad for ideas that can change the world.
          </p>
          <a href="/metatv" className="mt-4 sm:mt-6 inline-block px-6 py-3 bg-green-700 text-white rounded-md text-lg sm:text-xl">
            Discover MetaTV
          </a>
        </div>
        <div>
          <img src={meta_tv_3} alt="MetaTV" className="w-full sm:w-3/4 h-64 sm:h-80 md:h-[22rem] object-cover rounded-lg shadow-md mx-auto" />
        </div>
      </div>

      {/* 7. Partners & Success Stories */}
      <div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center">Partners & Success Stories</h3>
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {successStories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{story.title}</h4>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">{story.text}</p>
              </div>
              <div className="flex-1 flex gap-4 sm:gap-6">
                {story.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${story.title} Image ${idx + 1}`}
                    className="w-1/2 h-48 sm:h-64 md:h-[22rem] object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <a href="/partners" className="px-6 py-3 border rounded-md text-lg sm:text-xl">
            Meet Our Partners
          </a>
        </div>
      </div>

      {/* 8. Final Call-to-Action */}
      <div className="text-center bg-green-50 p-8 sm:p-12 rounded-lg shadow-md">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Join us in transforming Africa’s bioeconomy</h3>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
          Whether as a partner, investor, or volunteer — your contribution helps us build a greener, healthier, and more empowered Africa. Together, we can turn innovation into transformation, and dreams into realities.
        </p>
        <a
          href="/contact"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-green-700 text-white rounded-md text-lg sm:text-2xl"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
}
