import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <strong className="brand-mark">{siteConfig.siteName}</strong>
          <p>{siteConfig.siteDescription}</p>
          <p>Contact: {siteConfig.supportEmail}</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Shop</strong>
            {siteConfig.primaryNavLinks.slice(0, 5).map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <strong>Research</strong>
            <Link href="/activewear-university">Activewear University</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/reviews">Reviews</Link>
          </div>
          <div>
            <strong>Trust</strong>
            {siteConfig.utilityLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
