import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="8" fill="#2A52BE" />
      {/* connected-campus symbol: central node linked to three study nodes */}
      <path
        d="M16 9.5v5M16 14.5l-5.5 6.5M16 14.5l5.5 6.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="7.5" r="2.5" fill="#FFFFFF" />
      <circle cx="16" cy="14" r="3" fill="#FFFFFF" />
      <circle cx="8.5" cy="23" r="2.5" fill="#FFFFFF" />
      <circle cx="23.5" cy="23" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {!compact && (
        <span className="text-lg font-bold tracking-tight text-heading">
          OneCampus
        </span>
      )}
    </span>
  );
}
