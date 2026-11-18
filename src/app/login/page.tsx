
import type { Metadata } from "next";
import { AuthComingSoon } from "@/components/site/auth-coming-soon";

const PAGE_TITLE = "Log in — OneCampus by Edvantae";

const PAGE_DESCRIPTION =
  "OneCampus accounts are coming soon. Learn what the platform will offer.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function LoginPage() {
  return (
    <AuthComingSoon
      eyebrow="Accounts Coming Soon"
      title="Logging in isn't available yet."
      description="OneCampus accounts are on the way. For now, explore what the platform will offer or reach out to the team — we're happy to keep you updated."
    />
  );
}