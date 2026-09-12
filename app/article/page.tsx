import { Metadata } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { articlesFAQ } from "@/lib/bioinfo";
export const metadata: Metadata = {
  title: "Engineering Notes",
  description:
    "Technical notes and practical answers on React, Next.js, Node.js, Express, and NestJS.",
  alternates: { canonical: "/article" },
};
const gradients: Record<string, string> = {
  React: "from-cyan-400 to-blue-500",
  "Next.js": "from-slate-200 to-slate-500",
  "Node.js": "from-emerald-400 to-green-600",
  Express: "from-violet-400 to-violet-600",
  NestJS: "from-rose-400 to-red-600",
};
const ArticlesPage = () => (
  <main className="min-h-screen py-8">
    <div className="mb-12">
      <p className="eyebrow">Knowledge base</p>
      <h1 className="page-heading">Engineering notes.</h1>
      <p className="page-copy">
        Practical answers to the questions behind modern, maintainable web
        applications.
      </p>
    </div>
    <div className="grid max-w-5xl gap-4">
      {articlesFAQ.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <Accordion
            key={tech.title}
            type="single"
            collapsible
            className="glass overflow-hidden rounded-2xl transition-colors hover:border-primary/30"
          >
            <AccordionItem value={`item-${index}`} className="border-0">
              <AccordionTrigger className="px-6 py-5 text-lg font-semibold text-white hover:bg-white/[.035] hover:no-underline">
                <span className="flex items-center gap-4">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${gradients[tech.title] || "from-slate-400 to-slate-600"} text-slate-950`}
                  >
                    <Icon size={20} />
                  </span>
                  {tech.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-3">
                  {tech.faqs.map((qna, qIndex) => (
                    <article
                      key={qIndex}
                      className="rounded-xl border border-white/10 bg-black/15 p-5"
                    >
                      <h2 className="font-semibold text-slate-100">
                        {qna.question}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {qna.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  </main>
);
export default ArticlesPage;
