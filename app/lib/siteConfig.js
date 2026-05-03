export const siteConfig = {
  siteName: "ActivewearEtc",
  siteUrl: process.env.ACTIVEWEAR_SITE_URL || "https://www.activewearetc.com",
  siteDescription:
    "Compare activewear by category, activity, fit, fabric, style, budget, and brand with clear affiliate disclosures and shopper-first guidance.",
  supportEmail: "hello@activewearetc.com",
  primaryNavLinks: [
    { href: "/women", label: "Women" },
    { href: "/men", label: "Men" },
    { href: "/activities", label: "Activities" },
    { href: "/brands", label: "Brands" },
    { href: "/retailers", label: "Retailers" },
    { href: "/styles", label: "Styles" },
    { href: "/sizes-fit", label: "Sizes & Fit" },
    { href: "/deals", label: "Deals" },
    { href: "/care", label: "Care" },
    { href: "/compare", label: "Compare" },
    { href: "/occasions", label: "Occasions" },
    { href: "/activewear-university", label: "University" }
  ],
  utilityLinks: [
    { href: "/about/advertiser-disclosure", label: "Affiliate Disclosure" },
    { href: "/about/editorial-policy", label: "Editorial Policy" },
    { href: "/about/how-we-rank-products", label: "How We Rank Products" },
    { href: "/about/price-and-availability", label: "Price & Availability" },
    { href: "/about/image-attribution-policy", label: "Image Attribution Policy" }
  ]
};
