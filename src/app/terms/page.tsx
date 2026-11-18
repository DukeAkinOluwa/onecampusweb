import type { Metadata } from "next";

const PAGE_TITLE = "Terms of Service — OneCampus by Edvantae";
const PAGE_DESCRIPTION =
  "Review the OneCampus terms of service information. The terms are being finalised and will be published after company approval.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function TermsPage() {
  return (
    <main id="main-content">
      <div className="container-page section-pad-tight">
        <h1 className="title-page">Terms of Service</h1>
        <p className="lead mt-4 max-w-2xl">
          These terms are being finalised and will be published here once
          approved by the company.
        </p>
      </div>
    </main>
  );
}