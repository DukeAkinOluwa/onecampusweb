
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/lib/reveal";
import { articles, blogCategories, formatDate } from "@/content/blog";
import { cn } from "@/lib/utils";

export default function BlogIndex() {
  const [category, setCategory] = useState<(typeof blogCategories)[number]>("All");

  const visible =
    category === "All"
      ? articles
      : articles.filter((article) => article.category === category);

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <PageHero
          eyebrow="Blog"
          title="Ideas for a More Organised Academic Life."
          description="Practical writing on planning your workload, studying with others, and making good use of learning technology."
          center
        />

        <section className="section-pad-tight">
          <div className="container-page">
            {/* Category filter */}
            <div
              className="flex flex-wrap justify-center gap-2"
              role="group"
              aria-label="Filter articles by category"
            >
              {blogCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-150",
                    category === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border-subtle bg-card text-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Article grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((article, i) => (
                <Reveal
                  key={article.slug}
                  as="article"
                  delay={(i % 3) * 70}
                >
                  <Link
                    href={`/blog/${encodeURIComponent(article.slug)}`}
                    className="card-base card-interactive flex h-full flex-col overflow-hidden !p-0"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.cover}
                        alt={article.coverAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <span className="w-fit rounded-md bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary">
                        {article.category}
                      </span>

                      <h2 className="title-sub mt-3">
                        {article.title}
                      </h2>

                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground">
                        {article.description}
                      </p>

                      <p className="mt-4 text-xs text-muted-foreground">
                        {formatDate(article.publishedDate)} ·{" "}
                        {article.readingMinutes} min read
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            {visible.length === 0 && (
              <p className="mt-10 text-center text-sm text-muted-foreground">
                No articles in this category yet. Try another filter.
              </p>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}