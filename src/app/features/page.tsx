
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { CtaPanel } from "@/components/site/cta-panel";
import { Reveal } from "@/lib/reveal";
import {
  coreFeatures,
  howItWorks,
  multiDeviceFeature,
} from "@/content/site";

const PAGE_DESCRIPTION =
  "Explore OneCampus features: time management, collaboration, gamification, academic resources, and AI study support.";

export const metadata: Metadata = {
  title: "Features — OneCampus by Edvantae",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Features — OneCampus by Edvantae",
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <PageHero
          eyebrow="Product Features"
          title="Everything You Need to Stay on Top of Your Studies."
          description="OneCampus brings planning, collaboration, resources, and study support together, so your academic life lives in one place instead of five."
          center
        />

        {/* Core features */}
        <section className="section-pad-tight">
          <div className="container-page">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreFeatures.map((feature, i) => (
                <Reveal
                  key={feature.title}
                  as="article"
                  delay={i * 70}
                  className={`card-base card-interactive card-accent${i % 2 === 1 ? " card-accent-alt" : ""}`}
                >
                  <span className="icon-tile">
                    <feature.icon className="size-5" aria-hidden="true" />
                  </span>

                  <h2 className="title-card mt-4">
                    {feature.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {feature.description}
                  </p>
                </Reveal>
              ))}

              <Reveal
                as="article"
                delay={350}
                className="card-base card-interactive card-accent card-accent-alt"
              >
                <span className="icon-tile">
                  <multiDeviceFeature.icon
                    className="size-5"
                    aria-hidden="true"
                  />
                </span>

                <h2 className="title-card mt-4">
                  {multiDeviceFeature.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {multiDeviceFeature.description}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-pad bg-secondary">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">How It Works</p>

              <h2 className="title-section mt-4">
                From Sign-Up to Study Session in Minutes.
              </h2>

              <p className="lead mt-4">
                OneCampus is designed to be simple to start and useful from the
                first day of term.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.step}
                  delay={i * 80}
                  className={`card-base card-accent${i % 2 === 1 ? " card-accent-alt" : ""}`}
                >
                  <span className="icon-tile !size-9 !rounded-lg">
                    <step.icon className="size-4" aria-hidden="true" />
                  </span>

                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.06em] text-primary">
                    Step {i + 1}
                  </p>

                  <h3 className="title-sub mt-1.5">
                    {step.step}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Availability note */}
        <section className="section-pad-tight">
          <div className="container-page">
            <div className="card-base mx-auto max-w-3xl text-center">
              <h2 className="title-card">Feature availability</h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-foreground">
                OneCampus is evolving. The features available in your account
                depend on your plan, and some capabilities are introduced
                progressively. For the latest details on what is included,{" "}
                <Link
                  href="/pricing"
                  className="font-semibold text-primary hover:underline"
                >
                  see pricing
                </Link>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-primary hover:underline"
                >
                  contact the team
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <CtaPanel
          title="Ready to Try OneCampus?"
          text="Create your account and start organising your academic life today."
          primaryLabel="Create a Free Account"
          primaryTo="/signup"
          secondaryLabel="View Pricing"
          secondaryTo="/pricing"
        />
      </main>

      <SiteFooter />
    </>
  );
}