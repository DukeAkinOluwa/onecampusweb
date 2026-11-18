
import type { Metadata } from "next";

import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "OneCampus | Academic Productivity Workspace by Edvantae",
  description:
    "OneCampus is an academic productivity workspace by Edvantae for tertiary students to organise tasks, collaborate with peers, and access study support.",
  openGraph: {
    title: "OneCampus | Academic Productivity Workspace by Edvantae",
    description:
      "OneCampus is an academic productivity workspace by Edvantae for tertiary students to organise tasks, collaborate with peers, and access study support.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    sitemap: "/sitemap.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Edvantae Digital Hub Limited",
              product: "OneCampus",
              email: "hello@edvantae.com",
            }),
          }}
        />
        <noscript>
          <style>
            {".reveal{opacity:1 !important;transform:none !important}"}
          </style>
        </noscript>
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <QueryProvider>
          <div id="main-content">{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
}