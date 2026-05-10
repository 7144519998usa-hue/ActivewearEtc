import Link from "next/link";
import AffiliateLink from "./AffiliateLink";
import { hasLiveAffiliateLink } from "../lib/affiliateLinks";

export default function ProductComparison({ products }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <article className="card product-card" key={product.href}>
          <div className="product-art" aria-hidden="true">
            <span>{product.category}</span>
          </div>
          <div>
            <span className="card-kicker">{product.badge}</span>
            <h3>{product.brand} {product.name}</h3>
            <p>{product.bestFor}</p>
            <div className="tag-row">
              <span className="tag">{product.category}</span>
              <span className="tag">{product.priceRange}</span>
              <span className="tag">{product.merchant}</span>
            </div>
          </div>
          <div className="product-actions">
            <AffiliateLink product={product}>
              {hasLiveAffiliateLink(product) ? `Check ${product.merchant} offer` : "View comparison notes"}
            </AffiliateLink>
            <Link href={product.href} className="secondary-button">
              See details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
