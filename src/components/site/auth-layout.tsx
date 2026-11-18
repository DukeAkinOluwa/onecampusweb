import {
  CalendarCheck2,
  BookOpen,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { LogoMark } from "./logo";

const benefits = [
  { icon: CalendarCheck2, label: "Organise your tasks." },
  { icon: UsersRound, label: "Collaborate with peers." },
  { icon: Sparkles, label: "Access study support." },
  { icon: BookOpen, label: "Keep your academic goals in view." },
];

/**
 * Shared two-column auth layout: blue brand panel (left, desktop) and a
 * white form card (right). Mobile stacks the form over a compact brand row.
 */
export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-[calc(100vh-68px)] lg:min-h-[calc(100vh-76px)] lg:grid-cols-[42%_58%]">
      {/* Brand panel */}
      <aside className="texture-grid-light relative hidden overflow-hidden bg-primary p-10 text-primary-foreground lg:flex lg:flex-col xl:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full border-[36px] border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 right-0 size-64 rounded-full bg-white/5"
        />
        <div className="relative">
          <span className="inline-flex items-center gap-2.5">
            <LogoMark />
            <span className="text-lg font-bold tracking-tight text-white">OneCampus</span>
          </span>
          <h2 className="mt-14 max-w-sm text-[28px] font-bold leading-tight text-white">
            Your Academic Success Starts Here.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/85">
            Organise your work, collaborate with peers, and explore tools designed to
            support your academic journey.
          </p>
          <ul className="mt-10 grid max-w-sm gap-4">
            {benefits.map((benefit) => (
              <li key={benefit.label} className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-white/12 text-white">
                  <benefit.icon className="size-4.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-white/90">{benefit.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Form panel */}
      <main
        id="main-content"
        className="flex items-center justify-center px-5 py-10 sm:px-10 lg:py-16"
      >
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <LogoMark />
            <span className="text-lg font-bold tracking-tight text-heading">OneCampus</span>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_6px_28px_rgba(16,35,79,0.06)] sm:p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
