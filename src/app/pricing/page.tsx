
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { PricingCards } from "@/components/site/pricing-cards";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { CtaPanel } from "@/components/site/cta-panel";
import { Reveal } from "@/lib/reveal";
import { campusPlan, pricingFaqs, studentPlans } from "@/content/site";

const PAGE_TITLE = "Pricing — OneCampus by Edvantae";

const PAGE_DESCRIPTION =
  "OneCampus plans for students, institutions, and student organisations. Contact the team for confirmed pricing details.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function PricingPage() {
  const plans = [...studentPlans, campusPlan];

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <PageHero
          eyebrow="Pricing"
          title="Simple Plans for Students and Campuses."
          description="Choose the plan that fits how you study — or talk to us about arrangements for your institution or student organisation."
          center
        />

        <section className="section-pad-tight">
          <div className="container-page">
            <Reveal>
              <PricingCards plans={plans} />
            </Reveal>

            <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
              Pricing is being finalised. Plan prices will be published here as
              soon as they are confirmed. Institutions and student bodies can
              request a quotation through the contact form.
            </p>
          </div>
        </section>

        <section className="section-pad bg-secondary">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Billing &amp; Plans</p>
              <h2 className="title-section mt-4">Pricing Questions, Answered.</h2>
            </div>

            <Reveal className="mx-auto mt-10 max-w-3xl">
              <FaqAccordion items={pricingFaqs} />
            </Reveal>
          </div>
        </section>

        <CtaPanel
          title="Need Pricing for Your Institution?"
          text="Contact our team to discuss arrangements for your campus or student organisation."
          primaryLabel="Contact Sales"
          primaryTo="/contact"
          secondaryLabel="Explore Features"
          secondaryTo="/features"
        />
      </main>

      <SiteFooter />
    </>
  );
}