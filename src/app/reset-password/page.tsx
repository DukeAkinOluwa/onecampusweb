import type { Metadata } from "next";
import { AuthComingSoon } from "@/components/site/auth-coming-soon";

const PAGE_TITLE = "Set a new password — OneCampus by Edvantae";
const PAGE_DESCRIPTION =
  "Password reset will be available when OneCampus accounts open.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/reset-password",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function ResetPasswordPage() {
  return (
    <AuthComingSoon
      eyebrow="Password Reset"
      title="Password reset isn't available yet."
      description="Password recovery will be available once OneCampus accounts open. If you need help with an existing arrangement, please contact the team directly."
    />
  );
}