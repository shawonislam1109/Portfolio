import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rabiyul Islam | Full Stack Developer",
    short_name: "Rabiyul Islam",
    description: "Portfolio of Rabiyul Islam, a full stack developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1d",
    theme_color: "#4adcc4",
  };
}
