import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MD. Rafsan Jamil | DevOps & Cloud Engineer",
    short_name: "Rafsan Jamil",
    description:
      "DevOps Engineer portfolio featuring Kubernetes, Docker, CI/CD, cloud infrastructure, monitoring and DevSecOps projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
