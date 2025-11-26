import { Metadata } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { articlesFAQ } from "@/lib/bioinfo";
import {
  Atom as ReactIcon,
  Code as NextjsIcon,
  Cpu as NodeIcon,
  Server as ExpressIcon,
  Box as NestJsIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rabiyul Islam Articles - Tech FAQ",
  description:
    "Explore professional questions and answers on React, Next.js, Node.js, Express.js, and NestJS.",
  openGraph: {
    title: "Rabiyul Islam Articles - Tech FAQ",
    description:
      "Technical FAQ about modern frontend and backend technologies.",
    images: "/images/articles-og-image.jpg",
  },
};

// Add icon & gradient mapping
const techIcons: Record<string, any> = {
  React: ReactIcon,
  "Next.js": NextjsIcon,
  "Node.js": NodeIcon,
  Express: ExpressIcon,
  NestJS: NestJsIcon,
};

const techGradients: Record<string, string> = {
  React: "from-blue-400 to-cyan-400",
  "Next.js": "from-black to-gray-700",
  "Node.js": "from-green-400 to-green-600",
  Express: "from-gray-500 to-gray-700",
  NestJS: "from-red-500 to-red-700",
};

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 px-6 py-12 transition-colors flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-14 text-neutral-900 dark:text-white text-center tracking-tight">
        Technical FAQ
      </h1>

      <div className="w-full max-w-4xl space-y-6">
        {articlesFAQ.map((tech, idx) => {
          const Icon = tech.icon;
          const gradient =
            techGradients[tech.title] || "from-gray-400 to-gray-600";

          return (
            <Accordion
              key={idx}
              type="single"
              collapsible
              className="w-full rounded-3xl bg-neutral-100 dark:bg-neutral-800 shadow-xl border border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <AccordionItem value={`item-${idx}`}>
                <AccordionTrigger className="flex items-center gap-4 px-6 py-4 text-lg font-semibold text-neutral-900 dark:text-white rounded-3xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  {tech.title}
                </AccordionTrigger>

                <AccordionContent className="text-neutral-700 dark:text-neutral-300 flex flex-col gap-4 mt-2 px-6 pb-4">
                  {tech.faqs.map((qna, qidx) => (
                    <div
                      key={qidx}
                      className="p-4 bg-neutral-200 dark:bg-neutral-700 rounded-2xl shadow-inner hover:scale-[1.01] transition-transform"
                    >
                      <p className="font-semibold text-neutral-900 dark:text-white">
                        Q: {qna.question}
                      </p>
                      <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                        A: {qna.answer}
                      </p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesPage;
