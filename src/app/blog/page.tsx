
import type { Metadata } from "next";
import BlogIndex from "./blog-index";

const PAGE_DESCRIPTION =
  "Practical articles on productivity, study habits, collaborative learning, and using AI study tools responsibly — from the OneCampus team.";

export const metadata: Metadata = {
  title: "Blog — OneCampus by Edvantae",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — OneCampus by Edvantae",
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogIndex />;
}
