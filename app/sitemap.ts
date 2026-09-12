import type { MetadataRoute } from "next";
import { projects } from "@/lib/bioinfo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rabiyulislam.dev";
  const updatedAt = new Date();
  const pages = ["", "/about", "/projects", "/skills", "/experiences", "/article", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: updatedAt, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: `${baseUrl}/projects/${project.id}`, lastModified: updatedAt, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
