import Link from "next/link";
import { buildAffiliateLink } from "../lib/affiliateLinks";

export default function AffiliateLink({ product, children, className = "primary-button" }) {
  const affiliateUrl = buildAffiliateLink(product);

  if (!affiliateUrl) {
    return (
      <Link href={product.href} className={className}>
        {children || "View buying guide"}
      </Link>
    );
  }

  return (
    <a className={className} href={affiliateUrl} rel="sponsored nofollow noopener" target="_blank">
      {children || `Shop ${product.merchant || "merchant"}`}
    </a>
  );
}
