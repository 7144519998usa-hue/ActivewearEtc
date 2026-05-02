import { siteConfig } from "./lib/siteConfig";

export default function manifest() {
  return {
    name: siteConfig.siteName,
    short_name: "ActivewearEtc",
    description: siteConfig.siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#111827",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
