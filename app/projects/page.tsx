import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/bioinfo";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore professional projects by Rabiyul Islam — Full Stack Developer specializing in modern web technologies.",
  alternates: { canonical: "/projects" },
};

export default function ProjectPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="mb-12"><p className="eyebrow">Selected work</p><h1 className="page-heading">Projects with purpose.</h1><p className="page-copy">Production products shaped around everyday business problems, with performance and clarity at the center.</p></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <Link
            key={i}
            href={`/projects/${p.id}`}
            rel="noopener noreferrer"
            className="group relative block rounded-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <Card className="glass h-full rounded-2xl p-4 transition-all duration-300 group-hover:border-primary/40">
              <CardHeader className="flex flex-col items-start space-y-2">
                <div
                  className={`p-3 rounded-xl shadow-inner ${p.color} bg-opacity-20`}
                >
                  <p.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  {p.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="mt-2">
                <p className="mb-4 leading-relaxed text-slate-400">
                  {p.description}
                </p>
                <p className="mb-2 text-sm text-slate-400">
                  <strong className="text-slate-200">
                    Tech Stack:
                  </strong>{" "}
                  {p.tech}
                </p>
                <span className="mt-2 inline-block rounded-lg bg-primary px-4 py-2 font-semibold text-slate-950">
                  Details Project →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
