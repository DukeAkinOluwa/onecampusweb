"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const primaryNav = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/for-institutions", label: "For Institutions" },
  { to: "/about", label: "About" },
] as const;

const resourcesNav = [
  { to: "/blog", label: "Blog" },
  { to: "/", hash: "faq", label: "FAQs" },
  { to: "/contact", label: "Contact Support" },
] as const;

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(to + "/");
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setResourcesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Outside click + Escape for the resources dropdown.
  useEffect(() => {
    if (!resourcesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setResourcesOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [resourcesOpen]);

  // Escape closes the mobile menu; lock background scroll while open.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = (active: boolean) =>
    cn(
      "relative rounded-md px-1 py-1.5 text-[13.5px] font-medium transition-colors duration-150",
      active
        ? "font-semibold text-primary"
        : "text-foreground hover:text-primary",
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border-subtle bg-white/95 backdrop-blur-[10px] transition-shadow duration-200",
        scrolled && "shadow-[0_2px_12px_rgba(16,35,79,0.06)]",
      )}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
        <Link href="/" aria-label="OneCampus home" className="rounded-md">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={cn(linkClass(isActive(pathname, item.to)), "py-2")}
              aria-current={isActive(pathname, item.to) ? "page" : undefined}
            >
              {item.label}
              {isActive(pathname, item.to) && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-[2px] h-0.5 rounded-full bg-primary"
                />
              )}
            </Link>
          ))}

          <div ref={resourcesRef} className="relative">
            <button
              type="button"
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              onClick={() => setResourcesOpen((v) => !v)}
              className={cn(linkClass(false), "flex items-center gap-1 py-2")}
            >
              Resources
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-200",
                  resourcesOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>
            {resourcesOpen && (
              <div
                role="menu"
                aria-label="Resources"
                className="absolute left-1/2 top-full mt-2 w-52 -translate-x-1/2 rounded-xl border border-border-subtle bg-card p-2 shadow-[0_10px_30px_rgba(16,35,79,0.10)]"
              >
                {resourcesNav.map((item) => (
                  <Link
                    key={item.label}
                    href={"hash" in item ? `${item.to}#${item.hash}` : item.to}
                    role="menuitem"
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Log in
          </Link>
          <Link href="/signup">
            <span className="inline-flex h-[42px] items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover">
              Get Started
            </span>
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/signup"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Get Started
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-heading transition-colors hover:bg-secondary"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-68px)] overflow-y-auto border-b border-border-subtle bg-card shadow-[0_16px_32px_rgba(16,35,79,0.10)] lg:hidden"
          style={{ animation: "menu-in 180ms ease-out" }}
        >
          <nav aria-label="Mobile" className="container-page flex flex-col py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className={cn(
                  "rounded-lg px-2 py-3.5 text-[15px]",
                  isActive(pathname, item.to)
                    ? "font-semibold text-primary"
                    : "font-medium text-foreground hover:text-primary",
                )}
                aria-current={isActive(pathname, item.to) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-3 px-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
              Resources
            </p>
            {resourcesNav.map((item) => (
              <Link
                key={item.label}
                href={item.to}
                {...("hash" in item ? { href: `${item.to}#${item.hash}` } : {})}
                className="rounded-lg px-2 py-3.5 text-[15px] font-medium text-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid gap-2.5 border-t border-border-subtle pt-4">
              <Link
                href="/login"
                className="inline-flex h-[46px] items-center justify-center rounded-lg border border-border-interactive bg-card text-sm font-semibold text-primary hover:bg-secondary"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-[46px] items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary-hover"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
