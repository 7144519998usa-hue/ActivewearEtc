import Link from "next/link";
import { buildAffiliateLink } from "../lib/affiliateLinks";

export default function AffiliateLink({ product, children, className = "primary-button" }) {
  const affiliateUrl = buildAffiliateLink(product);

  if (!affiliateUrl) {
    return (
      <Link href={product.href} className={className}>
        {children || "View comparison notes"}
      </Link>
    );
  }

  return (
    <a className={className} href={affiliateUrl} rel="sponsored nofollow noopener" target="_blank">
      {children || `View ${product.merchant || "merchant"} options`}
    </a>
  );
}
