import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/lib/bioinfo";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ singleProject: string }>;
}): Promise<Metadata> {
  const { singleProject } = await params;
  const project = projects.find((item) => item.id === Number(singleProject));
  if (!project)
    return {
      title: "Project not found",
      robots: { index: false, follow: false },
    };
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.title} | Rabiyul Islam`,
      description: project.description,
      type: "article",
      url: `/projects/${project.id}`,
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ singleProject: string }>;
}) {
  const { singleProject } = await params;
  const project = projects.find((p) => p.id === Number(singleProject));
  if (!project) notFound();
  return (
    <main className="py-8">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
        <div>
          <p className="eyebrow">Case study · 0{project.id}</p>
          <h1 className="page-heading max-w-3xl">{project.title}</h1>
          <p className="page-copy">{project.description}</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-slate-500">
            Live product
          </p>
          <Link
            href={project.link}
            target="_blank"
            className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-cyan-200"
          >
            Visit project <ArrowUpRight size={18} />
          </Link>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            A scalable software product, designed to make complex operations
            feel straightforward.
          </p>
        </div>
      </section>
      <section className="mt-12">
        <div className="glass overflow-hidden rounded-3xl p-3 sm:p-5">
          <Carousel className="relative w-full">
            <CarouselContent>
              {project.children.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                    <Image
                      src={img}
                      alt={`${project.title} interface ${index + 1}`}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-5 border-white/10 bg-slate-950/85 text-white hover:bg-primary hover:text-slate-950" />
            <CarouselNext className="right-5 border-white/10 bg-slate-950/85 text-white hover:bg-primary hover:text-slate-950" />
          </Carousel>
        </div>
      </section>
      <section className="mt-12 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <aside>
          <p className="eyebrow">Technology</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Built with a modern stack.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.children.technologies.map((tech) => (
              <Badge
                key={tech}
                className="border border-primary/25 bg-primary/10 px-3 py-1.5 text-primary hover:bg-primary/15"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </aside>
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            What it delivers.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.children.features.map((feature, index) => (
              <Card key={index} className="glass rounded-2xl">
                <CardHeader>
                  <span className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle2 size={17} />
                  </span>
                  <CardTitle className="text-lg text-white">
                    {feature.title.replace(/^Feature \d+: /, "")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.subFeatures.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm leading-6 text-slate-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export async function generateStaticParams() {
  return projects.map((project) => ({ singleProject: project.id.toString() }));
}
