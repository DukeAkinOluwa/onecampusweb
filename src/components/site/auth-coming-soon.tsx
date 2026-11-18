import Link from "next/link";
import { Clock3 } from "lucide-react";
import { SiteHeader } from "./header";
import { AuthLayout } from "./auth-layout";

/**
 * Static placeholder for the account pages (login, signup, password recovery).
 * The site currently runs without a backend, so accounts are not available;
 * these pages explain that honestly and route visitors to useful static pages.
 * When a backend is re-integrated, replace each route's body with the real
 * authentication form again.
 */
export function AuthComingSoon({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <SiteHeader />
      <AuthLayout>
        <div className="text-center" role="status">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-soft">
            <Clock3 className="size-7 text-primary" aria-hidden="true" />
          </span>
          <p className="eyebrow mt-5">{eyebrow}</p>
          <h1 className="title-page mt-3 text-[24px]">{title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-foreground">{description}</p>
          <div className="mt-7 grid gap-3">
            <Link href="/features" className="btn-primary w-full">
              Explore Features
            </Link>
            <Link href="/contact" className="btn-secondary w-full">
              Contact the Team
            </Link>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            You can also email us at{" "}
            <a
              href="mailto:hello@edvantae.com"
              className="font-semibold text-primary hover:underline"
            >
              hello@edvantae.com
            </a>
            .
          </p>
        </div>
      </AuthLayout>
    </>
  );
}
