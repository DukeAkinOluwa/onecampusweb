
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/lib/reveal";
import {
  formatDate,
  getArticle,
  relatedArticles,
} from "@/content/blog";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ArticleMetadataProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ArticleMetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article unavailable — OneCampus by Edvantae",
    };
  }

  return {
    title: `${article.title} — OneCampus by Edvantae`,
    description: article.description,
    alternates: {
      canonical: `/blog/${encodeURIComponent(article.slug)}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedDate,
    },
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const related = relatedArticles(article, 2);

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <article>
          {/* Article header */}
          <header className="section-pad-tight texture-grid">
            <div className="container-page max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to Blog
              </Link>

              <span className="mt-5 block w-fit rounded-md bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary">
                {article.category}
              </span>

              <h1 className="title-page mt-4">
                {article.title}
              </h1>

              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {article.author} · {formatDate(article.publishedDate)} ·{" "}
                {article.readingMinutes} min read
              </p>
            </div>
          </header>

          {/* Cover */}
          <div className="container-page max-w-4xl">
            <Reveal>
              <img
                src={article.cover}
                alt={article.coverAlt}
                width={1024}
                height={640}
                className="aspect-[16/10] w-full rounded-[18px] object-cover shadow-[0_8px_30px_rgba(16,35,79,0.10)]"
              />
            </Reveal>
          </div>

          {/* Body */}
          <div className="container-page max-w-3xl">
            <div className="article-body mt-10">
              {article.blocks.map((block, i) => {
                if (block.type === "h2") {
                  return <h2 key={i}>{block.text}</h2>;
                }

                if (block.type === "h3") {
                  return <h3 key={i}>{block.text}</h3>;
                }

                if (block.type === "ul") {
                  return (
                    <ul key={i}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return <p key={i}>{block.text}</p>;
              })}
            </div>
          </div>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="section-pad bg-secondary">
            <div className="container-page">
              <h2 className="title-section text-center">
                Keep Reading.
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${encodeURIComponent(rel.slug)}`}
                    className="card-base card-interactive flex gap-4 overflow-hidden !p-4"
                  >
                    <img
                      src={rel.cover}
                      alt={rel.coverAlt}
                      loading="lazy"
                      className="hidden size-24 shrink-0 rounded-xl object-cover sm:block"
                    />

                    <div>
                      <p className="text-xs font-semibold text-primary">
                        {rel.category}
                      </p>

                      <h3 className="title-sub mt-1.5">
                        {rel.title}
                      </h3>

                      <p className="mt-1.5 text-xs text-muted-foreground">
                        {rel.readingMinutes} min read
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}