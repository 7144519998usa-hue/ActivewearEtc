/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com",
      "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join("; ")
  }
];

const nextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "activewearetc.com" }],
        destination: "https://www.activewearetc.com/:path*",
        permanent: true
      },
      {
        source: "/www.activewearetc.com/sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true
      },
      {
        source: "/activewearetc.com/sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true
      },
      {
        source: "/www.activewearetc.com/sitemap_index.xml",
        destination: "/sitemap_index.xml",
        permanent: true
      },
      {
        source: "/activewearetc.com/sitemap_index.xml",
        destination: "/sitemap_index.xml",
        permanent: true
      }
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  }
};

module.exports = nextConfig;
