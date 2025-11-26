import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Layers,
  Server,
  Package,
  Flame,
  Wrench,
  GitBranch,
  Docker,
  Rabbit,
  Cpu,
  PenTool,
  Users,
  Lightbulb,
} from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Rabiyul Islam Skills",
  description:
    "Explore the professional skills of Rabiyul Islam, Full Stack Developer, with detailed expertise in frontend, backend, tools, and soft skills.",
  openGraph: {
    title: "Rabiyul Islam Skills",
    description:
      "Comprehensive overview of Rabiyul Islam's technical and professional skills, including React, Next.js, Node.js, NestJS, TailwindCSS, and more.",
    images: "/images/skills-og-image.jpg",
  },
};

const skillsData = [
  {
    category: "Frontend Development",
    icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />,
    description:
      "I craft visually appealing, responsive, and high-performing UIs using modern frontend tools and frameworks.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "ShadCN UI",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6 text-green-600 dark:text-green-300" />,
    description:
      "I design and build scalable backend systems, REST APIs, authentication, and microservice architectures.",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "REST APIs",
      "Microservices",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    category: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6 text-purple-600 dark:text-purple-300" />,
    description:
      "I use modern tools for version control, containerization, message queues, testing, and deployment.",
    skills: [
      "Git",
      "Docker",
      "Redis",
      "RabbitMQ",
      "CI/CD",
      "Vercel",
      "Postman",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    category: "Soft Skills",
    icon: (
      <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />
    ),
    description:
      "I excel in communication, teamwork, leadership, and strategic thinking — essential for delivering quality software.",
    skills: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Agile Methodology",
      "Critical Thinking",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
];

const Skill = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 p-10 transition-all duration-300">
      <h1 className="text-5xl font-extrabold mb-14 text-neutral-900 dark:text-white text-center tracking-tight">
        My Skills & Expertise
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {skillsData.map((section, idx) => (
          <div
            key={idx}
            className="group bg-neutral-100 dark:bg-neutral-800 p-6 rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${section.gradient} text-white shadow-md`}
              >
                {section.icon}
              </div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                {section.category}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
              {section.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill, i) => (
                <Badge
                  key={i}
                  className="px-3 py-1 rounded-lg text-sm font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
