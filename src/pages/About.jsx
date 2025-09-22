import React, { useState } from "react";

// Import images
import Prof_Joel from "../assets/images/Prof_Joel.png";
import Mentorship from "../assets/images/Mentorship.png";
import Empowerment from "../assets/images/Empowerment.png";

const aboutData = [
  {
    title: "Vision",
    text: "To drive Africa’s transition toward a green, sustainable economy by turning agro-waste, herbs, and microbes into solutions that transform industries and communities.",
  },
  {
    title: "Values",
    text: "Faith, integrity, excellence, and community — guiding everything we do in science, entrepreneurship, and innovation.",
  },
  {
    title: "Headquarters",
    text: "Based in Mbarara City, Uganda — strategically positioned to be a hub of innovation and youth empowerment in East Africa.",
  },
];

export default function About() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="about" className="min-h-screen px-6 py-12 max-w-6xl mx-auto space-y-16">
      <h3 className="text-2xl font-bold mb-6">About Avodah Innovations</h3>

      {/* Intro */}
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        Avodah Innovations is a bioeconomy enterprise headquartered in Mbarara
        City, Uganda. We combine science, entrepreneurship, and community —
        grounded in faith and integrity — to transform lives and empower youth.
        As the engine behind <span className="font-semibold">Avodah Park</span>,
        we provide an ecosystem where ideas are designed, developed, and
        delivered to market, creating jobs and driving Africa’s bioeconomy.
      </p>

      {/* Founder Story with Image */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-xl font-bold mb-2">Our Founder: Prof. Dr. Joel Bazira</h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            <span className="font-semibold">Prof. Dr. Joel Bazira</span> is a{' '}
            <span className="italic">Medical Doctor (MBChB, MMED, PhD)</span>, an{' '}
            <span className="font-semibold">Associate Professor of Microbiology</span>{' '}
            at Mbarara University of Science and Technology, an{' '}
            <span className="font-semibold">innovator and entrepreneur</span>, and
            the <span className="font-semibold">Senior Pastor</span> of Lift Up
            Jesus Church, Mbarara. Beyond his professional roles, he is a husband,
            family man, mentor, and visionary behind Avodah Innovations.
          </p>

          <a
            href="https://www.linkedin.com/in/joel-bazira-01549b8b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="rounded-lg overflow-hidden h-120 flex items-center justify-center">
          <img
            src={Prof_Joel}
            alt="Founder Prof. Dr. Joel Bazira"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Mentorship & Youth Impact with Image */}
      <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-lg mb-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-lg font-bold mb-2">Mentorship & Impact</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            For over <span className="font-semibold">24 years</span>, Prof. Dr. Bazira
            has taught and mentored students at MUST. With{' '}
            <span className="font-semibold">30 years of ministry</span> and over{' '}
            <span className="font-semibold">15 years</span> leading Lift Up Jesus
            Church, he has invested deeply in Uganda’s youth. During the COVID-19
            lockdowns, more than <span className="font-semibold">40 young
            people</span> stayed in his home, receiving mentorship in faith,
            leadership, and innovation. Many have since launched impactful projects
            in biotechnology, media, and community transformation.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden h-90 flex items-center justify-center">
          <img
            src={Mentorship}
            alt="Youth Mentorship at Avodah"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Biblical Basis for Innovation */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h4 className="text-xl font-bold mb-4">Our Biblical Basis for Innovation</h4>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          At Avodah, we believe innovation is rooted in God’s Word and is meant
          to solve real problems:
        </p>
        <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
          <li>
            <span className="font-semibold">Joseph (Genesis 41:14–57)</span> – 
            designed a 14-year national food security system through divine
            insight and strategic planning.
          </li>
          <li>
            <span className="font-semibold">Jacob (Genesis 30:25–43)</span> – 
            applied creative problem-solving and early genetics to multiply his flock.
          </li>
          <li>
            <span className="font-semibold">Tower of Babel (Genesis 11:3–4)</span> – 
            demonstrated early engineering and material innovation (“let us make
            bricks and bake them thoroughly”).
          </li>
        </ul>
      </div>

      {/* Vision, Values, HQ */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer transition duration-300"
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            <h4 className="font-bold text-center text-lg">{item.title}</h4>
            <p
              className={`text-sm text-gray-700 mt-2 ${
                expanded === index ? "" : "line-clamp-3"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Youth Empowerment with Image */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-xl font-bold mb-4">Empowering Uganda’s Youth</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Uganda has the <span className="font-semibold">youngest population in
            the world</span>, with more than <span className="font-semibold">70%
            under the age of 30</span>. Avodah Innovations views this not as a
            crisis, but as an opportunity to build Africa’s future. Through camps,
            hackathons, faith-based mentorship, and incubation programs, we are
            equipping youth with the skills, platforms, and values they need to
            transform communities and industries.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden h-64 flex items-center justify-center">
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
