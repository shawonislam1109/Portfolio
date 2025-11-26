import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/bioinfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rabiyul Islam Projects",
  description:
    "Explore professional projects by Rabiyul Islam — Full Stack Developer specializing in modern web technologies.",
  openGraph: {
    title: "Rabiyul Islam Projects",
    description: "Explore ISP Billing, Utility Management, Portfolio and more.",
    images: "/images/projects-og-image.jpg",
  },
};

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 p-6 transition-colors">
      <h1 className="text-4xl font-extrabold mb-10 text-neutral-900 dark:text-white text-center">
        My Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="
            relative group rounded-2xl p-[2px]
            bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40
            dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20
            hover:shadow-[0_0_35px_rgba(0,0,0,0.3)]
            transition-all duration-500
            hover:scale-[1.03]
          "
          >
            {/* Inner Card */}
            <Card
              className="
              backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70
              border border-white/20 dark:border-neutral-700/20
              rounded-2xl p-4 h-full
              shadow-xl transition-all duration-500
              group-hover:bg-white/80 group-hover:dark:bg-neutral-900/80
              "
            >
              <CardHeader className="flex flex-col items-start space-y-2">
                <div
                  className={`p-3 rounded-xl bg-neutral-200 dark:bg-neutral-800 shadow-inner ${p.color}`}
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

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  <strong className="text-neutral-800 dark:text-neutral-200">
                    Tech Stack:
                  </strong>{" "}
                  {p.tech}
                </p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block mt-2 px-4 py-2 rounded-lg font-semibold
                    text-white bg-gradient-to-r from-blue-600 to-purple-600
                    hover:from-purple-600 hover:to-blue-600
                    dark:from-blue-500 dark:to-purple-500
                    transition-all duration-300 shadow-md hover:shadow-xl
                  "
                >
                  Visit Project →
                </a>
              </CardContent>
            </Card>

            {/* Glow Effect */}
            <div
              className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-br from-blue-500/40 to-purple-500/40
              opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
