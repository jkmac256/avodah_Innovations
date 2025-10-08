import React from "react";

// Import images
import meta_tv from "../assets/images/meta_tv.png";
import meta_tv_2 from "../assets/images/meta_tv_2.png";
import Mentorship from "../assets/images/Mentorship.png";
import meta_tv_4 from "../assets/images/meta_tv_4.png";

function Section({ title, text, img, reverse, width, height }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 mb-12`}
    >
      {/* Text */}
      <div className="md:w-1/2">
        <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
          {title}
        </h4>
        <p className="text-gray-700 text-xl md:text-2xl lg:text-3xl leading-relaxed">
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

export default function MetaTV() {
  const sections = [
    {
      title: "Our Role",
      text: "MetaTV bridges science and society, giving innovators a platform to share their work. It produces documentaries, feature stories, and training modules that inspire trust in local biotechnology solutions while mobilizing investor support.",
      img: meta_tv,
      width: "540px",
      height: "650px",
    },
    {
      title: "Studios & Equipment",
      text: "With over $50,000 invested, MetaTV is equipped with cameras, switchers, mixers, lighting, and editing suites. These facilities allow for professional-quality live broadcasts, educational content, and marketing campaigns.",
      img: meta_tv_2,
      width: "520px",
      height: "360px",
    },
    {
      title: "Training & Youth Engagement",
      text: "Beyond broadcasting, MetaTV trains young people in media production, storytelling, and digital marketing. Students, interns, and startups learn how to communicate science and business effectively.",
      img: Mentorship,
      width: "500px",
      height: "350px",
    },
    {
      title: "MetaTV App",
      text: "We are building the MetaTV mobile application, designed to bring innovation stories, live shows, and training directly to audiences across Africa. This digital-first approach ensures greater reach and accessibility.",
      img: meta_tv_4,
      width: "540px",
      height: "650px",
    },
  ];

  return (
    <section
      id="metatv"
      className="min-h-screen px-4 md:px-6 lg:px-12 py-8 md:py-12 max-w-6xl mx-auto"
    >
      <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        MetaTV — Media & Community Engagement
      </h3>
      <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto text-base md:text-xl lg:text-2xl">
        MetaTV is the heartbeat of Avodah Park’s community engagement. It
        connects innovators to society, investors, and global markets through
        storytelling, live broadcasts, and digital training. More than just
        media, MetaTV is a catalyst for Africa’s innovation ecosystem.
      </p>

      {/* Sections with alternating layout */}
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          text={section.text}
          img={section.img}
          reverse={index % 2 !== 0} // alternate layout
          width={section.width}
          height={section.height}
        />
      ))}

      {/* Closing */}
      <div className="mt-16 text-center">
        <h4 className="font-semibold text-lg md:text-xl lg:text-2xl mb-2">
          MetaTV’s Promise
        </h4>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          By combining media, science, and youth empowerment, MetaTV ensures
          that innovations don’t stay in the lab but reach the community,
          markets, and policymakers — where they can create real impact.
        </p>
      </div>
    </section>
  );
}
