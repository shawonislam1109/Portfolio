// app/experience/page.tsx

import { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Experience | Rabiyul Islam",
  description:
    "Professional work experience of Rabiyul Islam, Full Stack Developer at Shunno IT.",
};

const experiences = [
  {
    company: "Shunno IT",
    role: "Full Stack Developer",
    period: "Aug 2023 — Present",
    description:
      "Working as a Full Stack Developer responsible for building production-grade software, maintaining systems, optimizing performance, and contributing to both frontend and backend features.",
    highlights: [
      "Developed ISP Billing Software using React, Node.js, Express.js & MongoDB.",
      "Built Utility Bill Management System using NestJS (Microservices).",
      "Integrated RabbitMQ for event-driven communication.",
      "Created responsive UI with React + Tailwind + ShadCN components.",
      "Worked with payment integrations and API communication.",
      "Improved performance, caching, and optimized database queries.",
    ],
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "TailwindCSS",
      "ShadCN UI",
      "RabbitMQ",
      "Docker",
    ],
    icon: Briefcase,
    gradient: "from-purple-500 to-indigo-500",
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 px-6 py-12 transition-colors flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-14 text-neutral-900 dark:text-white text-center tracking-tight">
        Work Experience
      </h1>

      <div className="w-full max-w-5xl space-y-10">
        {experiences.map((exp, i) => (
          <Card
            key={i}
            className="bg-neutral-100 dark:bg-neutral-800 border border-transparent shadow-lg rounded-3xl p-8 hover:shadow-2xl hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            <CardHeader className="mb-6">
              <div
                className={`p-4 rounded-xl bg-gradient-to-br ${exp.gradient} text-white shadow-md w-fit mb-4`}
              >
                <exp.icon className="h-8 w-8" />
              </div>

              <CardTitle className="text-3xl font-bold text-neutral-900 dark:text-white">
                {exp.role}
              </CardTitle>

              <p className="text-neutral-700 dark:text-neutral-300 text-lg mt-1">
                {exp.company} • {exp.period}
              </p>
            </CardHeader>

            <CardContent>
              <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">
                Key Contributions
              </h3>
              <ul className="list-disc ml-6 mb-6 space-y-2 text-neutral-700 dark:text-neutral-400">
                {exp.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
