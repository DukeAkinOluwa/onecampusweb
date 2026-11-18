"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Accessible single-open accordion: one item open at a time, clicking the
 * open item closes it. Expansion animates via the CSS grid rows technique
 * (no clipping), chevron rotates 180 degrees, full keyboard support.
 */
export function FaqAccordion({ items, className }: { items: Faq[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className={cn("grid gap-3", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${uid}-q-${index}`;
        const panelId = `${uid}-a-${index}`;
        return (
          <div
            key={item.question}
            className="card-base !p-0 overflow-hidden"
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-controls={panelId}
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-heading transition-colors duration-150 hover:text-primary md:px-6"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0 text-primary transition-transform duration-200",
                    open && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-200 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-foreground md:px-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
