import { Check } from "lucide-react";
import Link from "next/link";
import type { Plan } from "@/content/site";
import { cn } from "@/lib/utils";

/** Data-driven pricing cards used on the homepage and pricing page. */
export function PricingCards({ plans, className }: { plans: Plan[]; className?: string }) {
  return (
    <div
      className={cn(
        "grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {plans.map((plan, index) => (
        <article
          key={plan.id}
          className={cn(
            "card-base card-interactive flex flex-col",
            plan.highlighted && "border-border-interactive shadow-[0_10px_26px_rgba(42,82,190,0.12)]",
          )}
          style={{ transitionDelay: index === 0 ? undefined : undefined }}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="title-card">{plan.name}</h3>
            {plan.highlighted && (
              <span className="rounded-md bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary">
                Most popular
              </span>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{plan.description}</p>
          <p className="mt-4 text-sm font-semibold text-heading">{plan.priceNote}</p>

          <ul className="mt-5 grid gap-2.5 border-t border-border-subtle pt-5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex-1" />
          <Link
            href={plan.ctaTo}
            className={cn(
              "inline-flex h-[46px] items-center justify-center rounded-lg text-sm font-semibold transition-colors duration-150",
              plan.highlighted ? "btn-primary" : "btn-secondary",
            )}
          >
            {plan.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}
