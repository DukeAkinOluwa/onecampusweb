
import Link from "next/link";
import Image from "next/image";
import { AppStoreBadges } from "./store-badges";
import { COMPANY_ADDRESS, CONTACT_EMAIL } from "@/content/site";

const CURRENT_YEAR = 2026;

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "For Institutions", to: "/for-institutions" },
      { label: "For Student Bodies", to: "/for-student-bodies" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Leadership", to: "/leadership" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "FAQs", to: "/", hash: "faq" },
      { label: "Support", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacyPolicy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-card">
      <div className="container-page py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link
              href="/"
              aria-label="OneCampus home"
              className="relative inline-flex h-10 w-40 shrink-0 items-center"
            >
              <Image
                src="/images/onecampus-logo.jpg"
                alt="OneCampus"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              OneCampus brings academic planning, collaboration, and study
              support into one connected workspace.
            </p>

            <p className="mt-4 text-xs text-muted-foreground">
              A product of Edvantae Digital Hub Limited.
            </p>

            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-heading">
                Get the App
              </h2>
              <AppStoreBadges className="mt-3 flex flex-wrap gap-2.5" />
            </div>

            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-heading">
                Head Office
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Edvantae Digital Hub Limited
                <br />
                {COMPANY_ADDRESS}
              </p>
              <p className="mt-3 text-sm">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-primary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-heading">
                {col.title}
              </h2>
              <ul className="mt-4 grid gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={"hash" in link ? `${link.to}#${link.hash}` : link.to}
                      className="text-sm text-foreground transition-colors duration-150 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border-subtle pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {CURRENT_YEAR} Edvantae Digital Hub Limited. All rights reserved.
          </p>
          <p>OneCampus — academic productivity and collaboration.</p>
        </div>
      </div>
    </footer>
  );
}