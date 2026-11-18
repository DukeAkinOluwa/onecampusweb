import "./globals.css"
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  ListChecks,
  Sparkles,
  UsersRound,
} from "lucide-react";

import heroStudent from "@/assets/hero-student.jpg";
import audienceStudents from "@/assets/audience-students.jpg";
import audienceBody from "@/assets/audience-body.jpg";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { DashboardMockup, MobileDashboardMockup } from "@/components/site/dashboard-mockup";
import { PricingCards } from "@/components/site/pricing-cards";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { CtaPanel } from "@/components/site/cta-panel";
import { Reveal } from "@/lib/reveal";

import {
  coreFeatures,
  campusPlan,
  faqs,
  productDemoBullets,
  studentPlans,
  trustStrip,
} from "@/content/site";

const PAGE_DESCRIPTION =
  "Organise academic tasks, collaborate with classmates, and explore AI-powered study support with OneCampus by Edvantae.";

export const metadata: Metadata = {
  title: "OneCampus by Edvantae | Organise Your Academic Life",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OneCampus by Edvantae | Organise Your Academic Life",
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <Hero />
        <TrustStrip />
        <CoreFeatures />
        <Audiences />
        <ProductDemo />
        <StudentNeeds />
        <PricingPreview />
        <FaqSection />

        <CtaPanel
          title="Ready to Bring More Structure to Your Academic Life?"
          text="Start exploring OneCampus and discover a more organised way to manage your studies."
          primaryLabel="Create a Free Account"
          primaryTo="/signup"
          secondaryLabel="Explore Features"
          secondaryTo="/features"
        />
      </main>

      <SiteFooter />
    </>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="hero-background">
      <div className="container-page grid items-center gap-12 py-14 lg:grid-cols-[52%_48%] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow hero-in-1">Your Academic Success Partner</p>

          <h1 className="display-hero mt-5 hero-in-2">
            Your Academic Life, Organised in One&nbsp;Place.
          </h1>

          <p className="lead mt-5 max-w-xl hero-in-3">
            OneCampus brings your tasks, study plans, collaboration, and
            AI-powered study support into one connected workspace—so you can
            spend less time juggling tools and more time learning.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row hero-in-4">
            <Link href="/signup" className="btn-primary">
              Create a Free Account
            </Link>

            <Link href="/#product-demo" className="btn-secondary">
              See How It Works
            </Link>
          </div>

          <p className="mt-6 text-sm font-medium text-muted-foreground hero-in-4">
            Plan better. Learn together. Make progress.
          </p>
        </div>

        {/* Hero visual */}
        <div className="relative mx-auto w-full max-w-[520px] hero-in-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_60%_30%,rgba(42,82,190,0.10),rgba(42,82,190,0)_60%)]"
          />

          <img
            src={heroStudent.src}
            alt="A university student working confidently on a laptop in a bright study space"
            width={520}
            height={560}
            fetchPriority="high"
            className="relative aspect-[520/560] w-full rounded-[20px] object-cover shadow-[0_10px_36px_rgba(16,35,79,0.10)]"
          />

          {/* Floating preview cards (desktop only) */}
          <div className="panel-large float-soft absolute -left-6 top-16 hidden w-56 items-start gap-3 !rounded-xl p-3.5 lg:flex xl:-left-10">
            <span className="icon-tile !size-9 !rounded-lg">
              <CalendarCheck2 className="size-4.5" aria-hidden="true" />
            </span>

            <span>
              <span className="block text-[13px] font-bold text-heading">
                Stay on Track
              </span>

              <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                Keep tasks and deadlines organised.
              </span>
            </span>
          </div>

          <div className="panel-large float-soft-delayed absolute -right-4 bottom-14 hidden w-56 items-start gap-3 !rounded-xl p-3.5 lg:flex xl:-right-8">
            <span className="icon-tile !size-9 !rounded-lg">
              <UsersRound className="size-4.5" aria-hidden="true" />
            </span>

            <span>
              <span className="block text-[13px] font-bold text-heading">
                Study Together
              </span>

              <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                Collaborate with your Study Squad.
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust strip ---------- */

function TrustStrip() {
  return (
    <section
      aria-label="What OneCampus helps you do"
      className="border-y border-border-subtle bg-card"
    >
      <div className="container-page grid gap-4 py-6 sm:grid-cols-3 sm:gap-6">
        {trustStrip.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-2.5"
          >
            <item.icon
              className="size-4.5 shrink-0 text-primary"
              aria-hidden="true"
            />

            <span className="text-sm font-medium text-heading">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Core features ---------- */

function CoreFeatures() {
  return (
    <section className="section-pad texture-grid">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="title-section">
            Everything You Need to Succeed Academically
          </h2>

          <p className="lead mt-4">
            Bring your academic tasks, study resources, and collaboration into
            one organised space.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((feature, i) => (
            <Reveal
              key={feature.title}
              as="article"
              delay={i * 70}
              className={cnCard(
                "card-base card-interactive card-accent",
                i % 2 === 1 && "card-accent-alt",
                i === 3 && "lg:col-start-1",
                i === 4 && "lg:col-start-2",
              )}
            >
              <span className="icon-tile">
                <feature.icon className="size-6" aria-hidden="true" />
              </span>

              <h3 className="title-card mt-4">{feature.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Audiences ---------- */

const audienceCards = [
  {
    heading: "Take Control of Your Academic Routine",
    body: "Organise tasks, manage deadlines, find study resources, and work toward your academic goals.",
    cta: "Explore Student Features",
    href: "/features",
    image: audienceStudents,
    alt: "University students studying together around a laptop on campus",
  },
  {
    heading: "Support a More Connected Student Experience",
    body: "Explore how a shared academic productivity platform could complement student-support and teaching initiatives.",
    cta: "For Institutions",
    href: "/for-institutions",
    image: audienceBody,
    alt: "Students planning academic work in a university environment",
  },
];

function Audiences() {
  return (
    <section className="section-pad bg-secondary">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="title-section">
            Built for Students, Institutions, and Student Bodies
          </h2>

          <p className="lead mt-4">
            OneCampus brings people, plans, and academic support into a more
            connected experience.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audienceCards.map((card, i) => (
            <Reveal
              key={card.href}
              as="article"
              delay={i * 70}
              className="card-base card-interactive flex flex-col overflow-hidden !p-0"
            >
              <img
                src={card.image.src}
                alt={card.alt}
                loading="lazy"
                width={640}
                height={360}
                className="aspect-[16/9] w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="title-card">{card.heading}</h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground">
                  {card.body}
                </p>

                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {card.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}

          <Reveal
            as="article"
            delay={140}
            className="card-base card-interactive flex flex-col"
          >
            <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-primary-soft">
              <span className="icon-tile !size-16 !rounded-2xl bg-white shadow-[0_4px_14px_rgba(42,82,190,0.14)]">
                <UsersRound className="size-8" aria-hidden="true" />
              </span>
            </div>

            <h3 className="title-card mt-6">
              Bring Your Student Community Together
            </h3>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground">
              Discover ways to support collaboration, campus engagement, and
              more organised student initiatives.
            </p>

            <Link
              href="/for-student-bodies"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              For Student Bodies
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Product demo ---------- */

function ProductDemo() {
  return (
    <section id="product-demo" className="section-pad flow-guide">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[40%_60%]">
        <Reveal>
          <h2 className="title-section">
            One Workspace. A More Organised Academic Life.
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-foreground">
            See how planning, collaboration, and study support can work
            together.
          </p>

          <ul className="mt-7 grid gap-3.5">
            {productDemoBullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-[15px] text-foreground"
              >
                <ListChecks
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>

          <Link href="/features" className="btn-secondary mt-8">
            Explore All Features
          </Link>
        </Reveal>

        <Reveal delay={100} className="relative">
          <DashboardMockup />

          <MobileDashboardMockup className="absolute -bottom-6 -left-4 hidden sm:block lg:-left-8" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Student needs (in place of testimonials) ---------- */

const studentNeeds = [
  {
    icon: ListChecks,
    title: "Structure for competing priorities",
    body: "Lectures, assignments, tests, and personal commitments all compete for the same week. OneCampus is designed to keep them in one clear view.",
  },
  {
    icon: UsersRound,
    title: "Collaboration built in",
    body: "Study Squads bring shared tasks, sessions, and resources into one place, so group work spends its energy on learning rather than logistics.",
  },
  {
    icon: Sparkles,
    title: "Support as you study",
    body: "AI study support is designed to assist with learning tasks — always as a tool to check and verify, never a replacement for your own thinking.",
  },
];

function StudentNeeds() {
  return (
    <section className="section-pad bg-secondary">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="title-section">
            Designed Around Real Student Needs
          </h2>

          <p className="lead mt-4">
            Academic life involves competing priorities. OneCampus is designed
            to help bring greater structure to the way students plan and study.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {studentNeeds.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={i * 70}
              className={cnCard(
                "card-base card-interactive card-accent text-center sm:text-left",
                i % 2 === 1 && "card-accent-alt",
              )}
            >
              <span className="icon-tile mx-auto sm:mx-0">
                <item.icon className="size-6" aria-hidden="true" />
              </span>

              <h3 className="title-card mt-4">{item.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing preview ---------- */

function PricingPreview() {
  return (
    <section className="section-pad texture-dots">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="title-section">
            Choose the Plan That Fits Your Goals
          </h2>

          <p className="lead mt-4">
            Start with the essentials and explore additional options as your
            needs grow.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <PricingCards
            plans={[...studentPlans, campusPlan]}
            className="mx-auto max-w-5xl"
          />
        </Reveal>

        <div className="mt-8 text-center">
          <Link href="/pricing" className="btn-secondary">
            View All Plans
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQs ---------- */

function FaqSection() {
  return (
    <section id="faq" className="section-pad bg-secondary">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="title-section">Frequently Asked Questions</h2>

          <p className="lead mt-4">
            Find answers to common questions about OneCampus and getting
            started.
          </p>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function cnCard(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(" ");
}