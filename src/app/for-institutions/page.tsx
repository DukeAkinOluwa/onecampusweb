
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { Reveal } from "@/lib/reveal";
import { institutionUseCases } from "@/content/site";

const PAGE_DESCRIPTION =
  "Explore how OneCampus can support student academic organisation, collaborative learning, and engagement at your institution.";

export const metadata: Metadata = {
  title: "For Institutions — OneCampus by Edvantae",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/for-institutions",
  },
  openGraph: {
    title: "For Institutions — OneCampus by Edvantae",
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function ForInstitutionsPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <PageHero
          eyebrow="For Institutions"
          title="Bring Better Academic Structure to Your Campus."
          description="Discuss with our team how OneCampus could complement your institution's existing student-support and learning initiatives."
        />

        <section className="section-pad-tight">
          <div className="container-page">
            <div className="grid gap-6 md:grid-cols-3">
              {institutionUseCases.map((useCase, i) => (
                <Reveal
                  key={useCase.title}
                  as="article"
                  delay={i * 80}
                  className="card-base"
                >
                  <span className="icon-tile">
                    <useCase.icon
                      className="size-5"
                      aria-hidden="true"
                    />
                  </span>

                  <h2 className="title-card mt-4">
                    {useCase.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {useCase.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-secondary">
          <div className="container-page grid items-start gap-10 lg:grid-cols-[42%_58%] lg:gap-14">
            <div>
              <p className="eyebrow">Request a Demo</p>

              <h2 className="title-section mt-4">
                Tell Us About Your Institution.
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-foreground">
                Share a few details about your institution and what you would
                like to explore. Our team will respond to arrange a
                conversation or a demonstration at a time that suits you.
              </p>

              <ul className="mt-6 grid gap-3 text-sm text-foreground">
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  Tell us about your student population and priorities.
                </li>

                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  Mention the areas of OneCampus you are most interested in.
                </li>

                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  We will follow up to arrange a suitable time.
                </li>
              </ul>
            </div>

            <EnquiryForm variant="institution" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}