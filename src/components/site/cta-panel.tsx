import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Final conversion CTA band (deep blue, white text, subtle decorative shape).
 */
export function CtaPanel({
  title,
  text,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  className,
}: {
  title: string;
  text: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel: string;
  secondaryTo: string;
  className?: string;
}) {
  return (
    <section className={cn("section-pad-tight", className)}>
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-[18px] bg-primary px-6 py-12 text-center sm:px-12 md:py-16"
          aria-label="Get started with OneCampus"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-white/5"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="title-section text-primary-foreground">{title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-primary-foreground/85">
              {text}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={primaryTo}
                className="inline-flex h-[46px] w-full items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-primary transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(16,35,79,0.25)] sm:w-auto"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryTo}
                className="inline-flex h-[46px] w-full items-center justify-center rounded-lg border border-white/45 px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10 sm:w-auto"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
