import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-mark">
          {siteConfig.siteName}
        </Link>
        <div className="nav-cluster">
          <nav className="nav-links" aria-label="Primary navigation">
            {siteConfig.primaryNavLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/deals" className="header-cta">
            Compare Deals
          </Link>
        </div>
      </div>
    </header>
  );
}
