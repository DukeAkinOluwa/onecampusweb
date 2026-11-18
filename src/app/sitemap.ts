import type { MetadataRoute } from "next";
import { articles } from "@/content/blog";

// Sitemap URLs use the canonical public project domain, not a preview host.
const BASE_URL = "https://onecampus.edvantae.com";

const staticPaths = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/leadership", priority: 0.6, changeFrequency: "monthly" },
  { path: "/for-institutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/for-student-bodies", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/signup", priority: 0.8, changeFrequency: "yearly" },
  { path: "/login", priority: 0.3, changeFrequency: "yearly" },
  { path: "/forgot-password", priority: 0.1, changeFrequency: "yearly" },
  { path: "/privacyPolicy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
] satisfies Array<{
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = articles.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}