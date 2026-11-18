
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { ProfileCard } from "@/components/site/profile-card";
import { Reveal } from "@/lib/reveal";
import { CONTACT_EMAIL, leadershipProfiles } from "@/content/site";

const PAGE_TITLE = "Leadership — OneCampus by Edvantae";

const PAGE_DESCRIPTION =
  "Meet Akinduko AkinOluwa, Managing Director, and Owolabi Titilayo, Chief Marketing Officer of Edvantae Digital Hub Limited, the team behind OneCampus.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/leadership",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <PageHero
          eyebrow="Leadership"
          title="The Team Behind OneCampus."
          description="OneCampus is built by Edvantae Digital Hub Limited. Meet the executives guiding the product and the company."
          center
        />

        <section className="section-pad-tight texture-dots">
          <div className="container-page">
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {leadershipProfiles.map((profile, i) => (
                <Reveal key={profile.fullName} delay={i * 90}>
                  <ProfileCard
                    profile={{
                      photo: profile.photo,
                      photoAlt: profile.photoAlt,
                      fullName: profile.fullName,
                      jobTitle: profile.jobTitle,
                      biography: profile.roleDescription,
                    }}
                  />
                </Reveal>
              ))}
            </div>

            <Reveal className="mx-auto mt-10 max-w-2xl text-center">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Full biographies and additional leadership profiles will be
                published here as they are approved for release.
              </p>

              <Link href="/contact" className="btn-secondary mt-6">
                Contact the Team
              </Link>

              <p className="mt-4 text-xs text-muted-foreground">
                You can also email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}