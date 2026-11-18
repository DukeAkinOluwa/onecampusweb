
import type { Metadata } from "next";
import Link from "next/link";
import { Target, UsersRound, ShieldCheck } from "lucide-react";
import aboutStudents from "@/assets/about-students.jpg";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { CtaPanel } from "@/components/site/cta-panel";
import { Reveal } from "@/lib/reveal";
import { COMPANY_NAME, CONTACT_EMAIL, PRODUCT_NAME } from "@/content/site";

const PAGE_DESCRIPTION =
  "OneCampus is built by Edvantae Digital Hub Limited to help tertiary students organise their academic life, collaborate, and access study support.";

export const metadata: Metadata = {
  title: "About — OneCampus by Edvantae",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — OneCampus by Edvantae",
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

const values = [
  {
    icon: Target,
    title: "Built around real student routines",
    description:
      "We design for how students actually work: deadlines in several places, group chats full of plans, and limited time between lectures.",
  },
  {
    icon: UsersRound,
    title: "Learning is better together",
    description:
      "Collaboration is a core part of the product, not an afterthought. Study Squads and shared planning bring classmates into one workspace.",
  },
  {
    icon: ShieldCheck,
    title: "Honest, useful technology",
    description:
      "AI study support is designed to assist your learning — and we are clear that it should be checked against reliable academic sources.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <PageHero
          eyebrow="About Us"
          title="We Help Students Make Their Academic Life Manageable."
          description={`${PRODUCT_NAME} is a product of ${COMPANY_NAME}, built to bring planning, collaboration, and study support into one connected workspace for tertiary students.`}
        />

        <section className="section-pad-tight">
          <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <img
                src={aboutStudents.src}
                alt="Students studying together in a bright campus space"
                width={720}
                height={520}
                loading="lazy"
                className="aspect-[720/520] w-full rounded-[20px] object-cover shadow-[0_10px_36px_rgba(16,35,79,0.10)]"
              />
            </Reveal>

            <div>
              <p className="eyebrow">Our Story</p>

              <h2 className="title-section mt-4">
                Why We Built OneCampus.
              </h2>

              <div className="mt-4 grid gap-4 text-[15px] leading-relaxed text-foreground">
                <p>
                  University life is full. Lectures, assignments, group work,
                  tests, and personal commitments all compete for the same
                  attention — and most students end up juggling notebooks,
                  messaging apps, and scattered reminders to keep up.
                </p>

                <p>
                  {PRODUCT_NAME} was created to change that: one connected
                  workspace where students can organise their tasks, plan
                  their weeks, collaborate with classmates, and access study
                  support as they learn.
                </p>

                <p>
                  We are building it for tertiary students first — and we work
                  with institutions and student bodies that want to bring
                  better academic structure to their campuses.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/features" className="btn-primary">
                  Explore Features
                </Link>

                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-secondary">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">What Guides Us</p>

              <h2 className="title-section mt-4">Our Approach.</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((value, i) => (
                <Reveal
                  key={value.title}
                  as="article"
                  delay={i * 80}
                  className="card-base card-accent"
                >
                  <span className="icon-tile">
                    <value.icon className="size-5" aria-hidden="true" />
                  </span>

                  <h3 className="title-card mt-4">{value.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {value.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad-tight">
          <div className="container-page">
            <div className="card-base mx-auto max-w-3xl text-center">
              <h2 className="title-card">Talk to us</h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-foreground">
                Questions about {PRODUCT_NAME}, partnerships, or support? Email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                or use the contact form.
              </p>

              <Link href="/contact" className="btn-primary mt-6">
                Go to Contact
              </Link>
            </div>
          </div>
        </section>

        <CtaPanel
          title="Join the OneCampus Community."
          text="Create a free account and start organising your academic life today."
          primaryLabel="Create a Free Account"
          primaryTo="/signup"
          secondaryLabel="For Institutions"
          secondaryTo="/for-institutions"
        />
      </main>

      <SiteFooter />
    </>
  );
}
