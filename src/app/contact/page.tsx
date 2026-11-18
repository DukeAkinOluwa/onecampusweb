
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { Reveal } from "@/lib/reveal";
import { CONTACT_EMAIL } from "@/content/site";

const PAGE_DESCRIPTION =
  "Contact the OneCampus team for support, account and billing questions, institutional partnerships, or general enquiries.";

export const metadata: Metadata = {
  title: "Contact — OneCampus by Edvantae",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — OneCampus by Edvantae",
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <PageHero
          eyebrow="Contact Us"
          title="How Can We Help?"
          description="Send us a message and it will be directed to the right team. We aim to respond to enquiries within two working days."
          center
        />

        <section className="section-pad-tight">
          <div className="container-page grid items-start gap-8 lg:grid-cols-[38%_62%] lg:gap-12">
            <Reveal>
              <div className="card-base">
                <h2 className="title-card">Contact details</h2>

                <div className="mt-5 grid gap-4">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-start gap-3 rounded-lg p-2 -m-2 transition-colors hover:bg-secondary"
                  >
                    <span className="icon-tile !size-9 !rounded-lg">
                      <Mail className="size-4" aria-hidden="true" />
                    </span>

                    <span>
                      <span className="block text-sm font-semibold text-heading">
                        Email
                      </span>

                      <span className="block text-sm text-foreground">
                        {CONTACT_EMAIL}
                      </span>
                    </span>
                  </a>
                </div>

                <p className="mt-5 border-t border-border-subtle pt-5 text-xs leading-relaxed text-muted-foreground">
                  OneCampus is a product of Edvantae Digital Hub Limited. For
                  institutional or student-body partnerships, you can also use
                  the dedicated pages under the Product menu.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <EnquiryForm variant="contact" />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}