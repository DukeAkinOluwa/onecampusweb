
import type { Metadata } from "next";
import { AuthComingSoon } from "@/components/site/auth-coming-soon";

const PAGE_DESCRIPTION =
  "Password reset will be available when OneCampus accounts open.";

export const metadata: Metadata = {
  title: "Reset your password — OneCampus by Edvantae",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/forgot-password",
  },
  openGraph: {
    title: "Reset your password — OneCampus by Edvantae",
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function ForgotPasswordPage() {
  return (
    <AuthComingSoon
      eyebrow="Password Reset"
      title="Password reset isn't available yet."
      description="Password recovery will be available once OneCampus accounts open. If you need help with an existing arrangement, please contact the team directly."
    />
  );
}