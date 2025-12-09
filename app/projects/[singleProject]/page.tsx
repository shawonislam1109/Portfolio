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

export default async function Page({
  params,
}: {
  // Type: Promise<{ singleProject: string }>
  params: Promise<{ singleProject: string }>;
}) {
  // params ke await koro
  const { singleProject } = await params;

  // Jodi ID number hisebe dorkar hoy (lookup er jonno)
  const projectId = Number(singleProject);
  const project = projects.find((p) => p.id === projectId)!;

  return (
    <div className="pt-10">
      <div className="pt-10 max-w-6xl mx-auto px-4 space-y-10">
        {/* Project Name & Description */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-gray-600">{project.description}</p>
          {/* project link  */}
          <Badge className="px-3 py-1 bg-green-100 text-blue-800 rounded-full text-sm font-medium">
            <Link href={`${project.link}`} target="blank">
              Visit Project
            </Link>
          </Badge>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <Carousel className="w-full relative">
            <CarouselContent className="flex gap-4">
              {project.children.images.map((img, index) => (
                <CarouselItem key={index} className="flex-shrink-0 w-full h-96">
                  <Card className="relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                      src={img}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation buttons */}
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
              ◀
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
              ▶
            </CarouselNext>
          </Carousel>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.children.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.children.features.map((feature, idx) => (
              <Card key={idx} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1">
                    {/* {feature.points?.map((point, id) => (
                      <li key={id} className="text-gray-700">
                        {point}
                      </li>
                    ))} */}
                    {feature.subFeatures?.map((sub, id) => (
                      <li key={id} className="text-gray-700">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((post) => ({
    singleProject: post.id.toString(), // Must be string
  }));
}
