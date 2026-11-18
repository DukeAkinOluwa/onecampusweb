
"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  [key: string]: unknown;
}

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      element.classList.add("revealed");
      return;
    }

    element.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 80px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      {...rest}
      ref={ref}
      className={cn("reveal", className)}
      style={{
        ...style,
        "--reveal-delay": `${delay}ms`,
      } as CSSProperties}
    >
      {children}
    </Tag>
  );
}