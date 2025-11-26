import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/bioinfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rabiyul Islam Projects",
  description:
    "Explore professional projects by Rabiyul Islam — Full Stack Developer specializing in modern web technologies.",
};

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 p-6 transition-colors">
      <h1 className="text-4xl font-extrabold mb-10 text-neutral-900 dark:text-white text-center">
        My Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl p-[2px] hover:scale-[1.03] transition-all duration-300"
          >
            <Card className="bg-white dark:bg-neutral-900 border border-transparent rounded-2xl p-4 shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex flex-col items-start space-y-2">
                <div
                  className={`p-3 rounded-xl shadow-inner ${p.color} bg-opacity-20`}
                >
                  <p.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-neutral-900 dark:text-white text-2xl font-bold">
                  {p.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="mt-2">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  {p.description}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  <strong className="text-neutral-800 dark:text-neutral-200">
                    Tech Stack:
                  </strong>{" "}
                  {p.tech}
                </p>
                <span className="inline-block mt-2 px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md group-hover:shadow-xl">
                  Visit Project →
                </span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
