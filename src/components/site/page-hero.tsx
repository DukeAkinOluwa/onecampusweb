import { cn } from "@/lib/utils";

/** Standard inner-page hero: eyebrow, H1, supporting paragraph. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  center = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <section className={cn("section-pad-tight texture-grid", className)}>
      <div
        className={cn(
          "container-page",
          center && "mx-auto max-w-3xl text-center",
        )}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="title-page mt-4">{title}</h1>
        <p
          className={cn(
            "lead mt-4 max-w-2xl",
            center && "mx-auto",
          )}
        >
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
