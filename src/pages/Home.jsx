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
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <h4 className="font-bold text-lg mb-2 text-center">{title}</h4>
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

export default function Home() {
  const successStories = [
    {
      title: "Mugambe Victor",
      text: "Innovator who turned microbes into biodegradable plastics — supported by Avodah Park labs and mentorship.",
      images: [Victor_1, Victor_2],
    },
    {
      title: "Crochet Youth Group",
      text: "A youth group that transformed waste into creative fashion products through Avodah Park incubation.",
      images: [Sheila, Crochets],
    },
  ];

  return (
    <section id="home" className="px-6 py-12 max-w-6xl mx-auto space-y-20">
      {/* 1. Hero */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Avodah Innovations
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Unleashing Uganda’s greatest asset: its <span className="font-semibold">youth</span> — to drive innovation, entrepreneurship, and global change.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="/core-business" className="px-4 py-2 bg-green-700 text-white rounded-md">
              Our Core Business
            </a>
            <a href="/avodah-park" className="px-4 py-2 border rounded-md">
              Avodah Park
            </a>
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden bg-gradient-to-tr from-green-50 to-white p-8">
          <img src={logo} alt="Hero" className="w-full h-96 object-cover rounded-md" />
        </div>
      </div>

      {/* 2. Mission & Impact */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card title="Mission">
          Reduce plastic pollution, improve health, add value to agro-residues, and create jobs while empowering youth for the bioeconomy.
        </Card>
        <Card title="MetaTV">
          Our media arm for storytelling, training, and investor outreach — developing a national broadcasting platform & app for innovators.
        </Card>
        <Card title="Impact">
          Hosted 20–40 young people during COVID-19 lockdowns, training them in innovation and faith-driven leadership.
        </Card>
        <Card title="Success Story">
          Supported innovators like <span className="font-semibold">Mugambe Victor</span> in turning microbes into biodegradable plastics.
        </Card>
      </div>

      {/* 3. Who We Are */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-lg md:text-4xl lg:text-4xl font-bold mb-3">Who We Are</h3>
        <p className="text-gray-700">
          Avodah Innovations is a bioeconomy enterprise headquartered in Mbarara City, Uganda. We combine <span className="font-semibold">science, entrepreneurship, and community</span> — grounded in faith and integrity — to transform lives and empower Africa’s youth.
        </p>
      </div>

      {/* 4. Core Business Preview */}
      <div>
        <h3 className="text-lg md:text-4xl lg:text-4xl font-bold mb-6 text-center">Our Core Business</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Bioplastics & Polymers">
            Biodegradable alternatives from cassava starch, banana peels, sugarcane bagasse — PHAs, pullulan, xanthan gum, eco-packaging.
          </Card>
          <Card title="Industrial Enzymes & Fermentation">
            Enzymes (cellulase, protease, lipase, amylase, phytase) and fermentation products for feed, farming, and industry.
          </Card>
          <Card title="Herbal-Based Innovations">
            Nutraceuticals, functional foods, and cosmetics from Moringa, Aloe vera, turmeric, and neem.
          </Card>
          <Card title="Drug Discovery & Diagnostics">
            AI-driven drug discovery + CRISPR/LAMP diagnostics for TB, malaria, AMR, and more.
          </Card>
        </div>
        <div className="text-center mt-6">
          <a href="/core-business" className="px-4 py-2 bg-green-700 text-white rounded-md">
            Explore More
          </a>
        </div>
      </div>

      {/* 5. Avodah Park Preview */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <img src={Avodah_3} alt="Avodah Park" className="w-full h-70 object-cover rounded-lg shadow-md" />
        </div>
        <div>
          <h3 className="text-lg md:text-4xl lg:text-4xl font-bold mb-2">Avodah Park</h3>
          <p className="text-gray-700">
            Our integrated hub for research, validation, production, training, and promotion — providing the full pipeline from <span className="font-semibold">Idea → Impact</span>.
          </p>
          <a href="/avodah-park" className="mt-4 inline-block px-4 py-2 border rounded-md">
            Explore Avodah Park
          </a>
        </div>
      </div>

      {/* 6. MetaTV Preview */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-lg md:text-4xl lg:text-4xl font-bold mb-2">MetaTV</h3>
          <p className="text-gray-700">
            Our digital media platform that tells the stories of innovators, connects them with investors, and trains youth in storytelling and digital marketing.
          </p>
          <a href="/metatv" className="mt-4 inline-block px-4 py-2 bg-green-700 text-white rounded-md">
            Discover MetaTV
          </a>
        </div>
        <div>
          <img src={meta_tv_3} alt="MetaTV" className="w-3/4 h-85 object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* 7. Partners & Success Stories */}
      <div>
        <h3 className="text-lg md:text-4xl lg:text-4xl font-bold mb-12 text-center">Partners & Success Stories</h3>
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">{story.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{story.text}</p>
              </div>
              <div className="flex-1 flex gap-4">
                {story.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${story.title} Image ${idx + 1}`} className="w-1/2 h-90 object-cover rounded-lg shadow-md" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="/partners" className="px-4 py-2 border rounded-md">
            Meet Our Partners
          </a>
        </div>
      </div>

      {/* 8. Final Call-to-Action */}
      <div className="text-center bg-green-50 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-3">Join us in transforming Africa’s bioeconomy</h3>
        <p className="text-gray-700 mb-4">
          Whether as a partner, investor, or volunteer — your contribution helps us build a greener, healthier, and more empowered Africa.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-green-700 text-white rounded-md text-lg"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
}