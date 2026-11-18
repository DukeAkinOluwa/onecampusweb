import type { Metadata } from "next";
import { AuthComingSoon } from "@/components/site/auth-coming-soon";

const PAGE_TITLE = "Sign up — OneCampus by Edvantae";
const PAGE_DESCRIPTION =
  "OneCampus sign-ups open soon. See the features coming to the platform.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/signup",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function SignupPage() {
  return (
    <AuthComingSoon
      eyebrow="Sign-ups Open Soon"
      title="Accounts are coming soon."
      description="We're preparing OneCampus for launch, and student accounts will open with it. In the meantime, take a look at the features or contact the team with any questions."
    />
  );
}