import { MetadataRoute } from "next";
import SERVICES from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((s) => ({
    url: `https://globalicon-constructions.com/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: "https://globalicon-constructions.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://globalicon-constructions.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
    {
      url: "https://globalicon-constructions.com/#about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://globalicon-constructions.com/#contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
