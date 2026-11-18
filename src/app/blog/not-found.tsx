
import Link from "next/link";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export default function BlogNotFound() {
  return (
    <>
      <SiteHeader />

      <main
        id="main-content"
        className="container-page section-pad-tight text-center"
      >
        <p className="eyebrow">Article not found</p>

        <h1 className="title-section mt-4">
          We couldn't find that article.
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          It may have been moved or renamed. Browse the blog instead.
        </p>

        <Link href="/blog" className="btn-primary mt-6">
          Back to Blog
        </Link>
      </main>

      <SiteFooter />
    </>
  );
}