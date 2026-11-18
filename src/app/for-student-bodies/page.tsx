
import type { Metadata } from "next";
import audienceBody from "@/assets/audience-body.jpg";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { Reveal } from "@/lib/reveal";

const PAGE_DESCRIPTION =
  "Explore how OneCampus can support student associations, faculty councils, and study groups with academic organisation and collaboration.";

export const metadata: Metadata = {
  title: "For Student Bodies — OneCampus by Edvantae",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/for-student-bodies",
  },
  openGraph: {
    title: "For Student Bodies — OneCampus by Edvantae",
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

const bodyBenefits = [
  {
    title: "One shared space for your members",
    description:
      "Explore how association members can coordinate plans, deadlines, and activities in a single workspace.",
  },
  {
    title: "Easier collaboration across faculties",
    description:
      "See how students across departments can organise study sessions, projects, and shared goals together.",
  },
  {
    title: "Support for your initiatives",
    description:
      "Discuss arrangements that fit your association's size, activities, and budget with our team.",
  },
];

export default function ForStudentBodiesPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <PageHero
          eyebrow="For Student Bodies"
          title="Give Your Members One Place to Plan and Study Together."
          description="Student associations, faculty councils, and campus organisations can explore how OneCampus supports the students they represent."
        />

        <section className="section-pad-tight">
          <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <img
                src={audienceBody.src}
                alt="A group of students from a campus organisation planning together"
                width={720}
                height={520}
                loading="lazy"
                className="aspect-[720/520] w-full rounded-[20px] object-cover shadow-[0_10px_36px_rgba(16,35,79,0.10)]"
              />
            </Reveal>

            <div>
              <p className="eyebrow">Why Student Bodies</p>

              <h2 className="title-section mt-4">
                Built for How Student Groups Work.
              </h2>

              <div className="mt-5 grid gap-5">
                {bodyBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="border-l-2 border-primary-soft pl-4"
                  >
                    <h3 className="title-sub">
                      {benefit.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-secondary">
          <div className="container-page grid items-start gap-10 lg:grid-cols-[42%_58%] lg:gap-14">
            <div>
              <p className="eyebrow">Partnership Enquiry</p>

              <h2 className="title-section mt-4">
                Start the Conversation.
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-foreground">
                Tell us about your organisation and what your members need. Our
                team will get back to you to discuss suitable arrangements.
              </p>
            </div>

            <EnquiryForm variant="student-body" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}