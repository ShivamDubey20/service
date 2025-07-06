import { siteUrl } from "../lib/constants";
import type { MetadataRoute } from "next";

export const revalidate = 1800; // 30 minutes - adjust as needed

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourdomain.com/",
      lastModified: new Date(),
    },
    // Add more static routes as needed
  ];
}
