import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/content/site";

/** Standard-styled iOS / Android download badges for the footer. */
export function AppStoreBadges({ className }: { className?: string }) {
  return (
    <div className={className}>
      <a
        href={APP_STORE_URL}
        className="store-badge"
        aria-label="Download OneCampus on the App Store"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6 shrink-0">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <span className="text-left">
          <span className="store-badge-label">Download on the</span>
          <span className="store-badge-name">App Store</span>
        </span>
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        className="store-badge"
        aria-label="Get OneCampus on Google Play"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6 shrink-0">
          <path d="M3 20.5V3.5c0-.6.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.75-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.94-.57 1.21l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.28zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
        </svg>
        <span className="text-left">
          <span className="store-badge-label">Get it on</span>
          <span className="store-badge-name">Google Play</span>
        </span>
      </a>
    </div>
  );
}
