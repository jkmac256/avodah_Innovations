import React, { useState } from "react";

// Import images
import Prof_Joel from "../assets/images/Prof_Joel.png";
import Mentorship from "../assets/images/Mentorship.png";
import Empowerment from "../assets/images/Empowerment.png";

const aboutData = [
  {
    title: "Vision",
    text: "To drive Africa’s transition toward a green, sustainable economy by turning agro-waste, herbs, and microbes into practical solutions that transform industries, strengthen communities, and inspire future generations.",
  },
  {
    title: "Values",
    text: "Faith, integrity, excellence, and community — guiding everything we do in science, entrepreneurship, and innovation while ensuring that our work remains impactful and people-centered.",
  },
  {
    title: "Headquarters",
    text: "Based in Mbarara City, Uganda — strategically positioned to be a hub of innovation and youth empowerment in East Africa, while connecting global ideas with local realities.",
  },
];

export default function About() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 space-y-12 sm:space-y-16 max-w-6xl mx-auto">
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        About Avodah Innovations
      </h3>

      {/* Intro */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
        Avodah Innovations is a bioeconomy enterprise headquartered in Mbarara
        City, Uganda. We combine science, entrepreneurship, and community — grounded in faith and integrity — to transform lives and empower youth. 
        As the engine behind <span className="font-semibold">Avodah Park</span>, we provide an ecosystem where ideas are designed, developed, and delivered to market, creating jobs, inspiring innovation, and driving Africa’s bioeconomy forward.
      </p>

      {/* Founder Story */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Our Founder: Prof. Dr. Joel Bazira</h4>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold">Prof. Dr. Joel Bazira</span> is a <span className="italic">Medical Doctor (MBChB, MMED, PhD)</span>, an <span className="font-semibold">Associate Professor of Microbiology</span> at MUST, an <span className="font-semibold">innovator and entrepreneur</span>, and the <span className="font-semibold">Senior Pastor</span> of Lift Up Jesus Church, Mbarara. Beyond his professional roles, he is a husband, mentor, and the visionary behind Avodah Innovations, blending science, faith, and leadership to create sustainable change.
          </p>
          <a
            href="https://www.linkedin.com/in/joel-bazira-01549b8b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm sm:text-base md:text-lg"
          >
            Connect on LinkedIn
          </a>
        </div>
        <div className="rounded-lg overflow-hidden h-90 sm:h-100 md:h-90 flex items-center justify-center">
          <img
            src={Prof_Joel}
            alt="Founder Prof. Dr. Joel Bazira"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
           
      {/* Mentorship & Impact */}
      <div className="bg-green-50 border-l-4 border-green-700 p-4 sm:p-6 md:p-8 rounded-lg mb-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Mentorship & Impact</h4>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            For over <span className="font-semibold">24 years</span>, Prof. Dr. Bazira has taught and mentored students at MUST. With <span className="font-semibold">30 years of ministry</span> and over <span className="font-semibold">15 years</span> leading Lift Up Jesus Church, he has invested deeply in Uganda’s youth. During COVID-19 lockdowns, more than <span className="font-semibold">40 young people</span> stayed in his home, receiving mentorship in faith, leadership, and innovation, many launching impactful projects in biotechnology, media, and community transformation.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden h-64 sm:h-80 md:h-[26rem] flex items-center justify-center">
          <img
            src={Mentorship}
            alt="Youth Mentorship at Avodah"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Biblical Basis */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 mb-10">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Biblical Basis for Innovation</h4>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          At Avodah, we believe innovation is rooted in God’s Word to solve real problems in society and industry. Scripture provides timeless examples of creativity, strategy, and resilience:
        </p>
        <ul className="list-disc pl-5 sm:pl-6 md:pl-8 text-base sm:text-lg md:text-xl text-gray-700 space-y-2">
          <li><span className="font-semibold">Joseph (Genesis 41:14–57)</span> – designed a 14-year national food security system through divine insight, saving nations from famine.</li>
          <li><span className="font-semibold">Jacob (Genesis 30:25–43)</span> – applied creative problem-solving and early genetics to multiply his flock.</li>
          <li><span className="font-semibold">Tower of Babel (Genesis 11:3–4)</span> – demonstrated early engineering and material innovation, showing humanity’s capacity to build.</li>
        </ul>
      </div>

      {/* Vision, Values, HQ */}
      <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3 mb-10">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer transition duration-300"
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">{item.title}</h4>
            <p className={`text-base sm:text-lg md:text-xl text-gray-700 mt-2 ${expanded === index ? "" : "line-clamp-3"}`}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Youth Empowerment */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Empowering Uganda’s Youth</h4>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Uganda has the <span className="font-semibold">youngest population in the world</span>, with more than <span className="font-semibold">70% under 30</span>. Avodah Innovations sees this as an opportunity to build Africa’s future through camps, hackathons, mentorship, and incubation programs, equipping youth to transform communities and industries.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden h-48 sm:h-64 md:h-72 flex items-center justify-center">
          <img
            src={Empowerment}
            alt="Youth Empowerment at Avodah"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
