import AnimatedText from "@/components/AnimatedText";
import { Metadata } from "next";
import React from "react";
import AboutImage from "@/components/aboutImage";
import { profileData } from "@/lib/bioinfo";

export const metadata: Metadata = {
  title: "Rabiyul Islam About Page",
  description:
    "Learn more about Rabiyul Islam, a Full Stack Developer skilled in modern web technologies and passionate about building scalable applications.",
  openGraph: {
    title: "Rabiyul Islam About Page",
    description:
      "A deep dive into Rabiyul Islam's journey, education, professional experience, and skills as a Full Stack Developer.",
    images: "/images/about-og-image.jpg",
  },
};

const About = () => {
  const textClass = "text-gray-600 dark:text-gray-400 leading-relaxed";

  return (
    <div className="mt-20 flex flex-col items-center justify-center px-4 lg:px-16">
      <AnimatedText
        text="Passion Meets Purpose"
        className="!lg:text-5xl text-3xl mb-10 font-bold text-center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-center w-full max-w-5xl">
        <div className="lg:col-span-3 order-first lg:order-last relative">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-700">
            <AboutImage />
          </div>
        </div>

        <section
          aria-labelledby="biography"
          className="lg:col-span-5 flex flex-col items-start justify-start space-y-6 order-last lg:order-first"
        >
          <h2
            id="biography"
            className="text-lg uppercase text-dark/75 font-semibold"
          >
            Biography
          </h2>
          {profileData.biography.map((para, idx) => (
            <p key={idx} className={textClass}>
              {para}
            </p>
          ))}

          <h3 className="text-md font-semibold uppercase text-dark/70 mt-4">
            Education
          </h3>
          <ul className={textClass + " list-disc ml-5"}>
            {profileData.education.map((edu, idx) => (
              <li key={idx}>{edu}</li>
            ))}
          </ul>

          <h3 className="text-md font-semibold uppercase text-dark/70 mt-4">
            Skills & Expertise
          </h3>
          <ul className={textClass + " list-disc ml-5"}>
            {profileData.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>

          <h3 className="text-md font-semibold uppercase text-dark/70 mt-4">
            Personal Attributes
          </h3>
          <ul className={textClass + " list-disc ml-5"}>
            {profileData.attributes.map((attr, idx) => (
              <li key={idx}>{attr}</li>
            ))}
          </ul>

          <h3 className="text-md font-semibold uppercase text-dark/70 mt-4">
            Additional Information
          </h3>
          <ul className={textClass + " list-disc ml-5"}>
            <li>
              <strong>Languages:</strong>{" "}
              {profileData.additionalInfo.languages.join(", ")}
            </li>
            <li>
              <strong>Hobbies:</strong>{" "}
              {profileData.additionalInfo.hobbies.join(", ")}
            </li>
            <li>
              <strong>Certifications:</strong>{" "}
              {profileData.additionalInfo.certifications.join(", ")}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
