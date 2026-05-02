import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import JsonLd from "./components/JsonLd";
import { siteConfig } from "./lib/siteConfig";
import { organizationSchema, websiteSchema } from "./lib/structuredData";

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "ActivewearEtc | Activewear Search and Comparison",
    template: "%s | ActivewearEtc"
  },
  description: siteConfig.siteDescription,
  verification: {
    google: "YB5AZHBeJC4aHHbcGKepXGEV1MQjx2qaUcpvuqEQTZk"
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "ActivewearEtc",
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "ActivewearEtc"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ActivewearEtc",
    description: siteConfig.siteDescription,
    images: ["/twitter-card.svg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LTTJNT17HD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LTTJNT17HD');
          `}
        </Script>
      </head>
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
