import Link from "next/link";
import { buildAffiliateLink } from "../lib/affiliateLinks";
import { sampleProducts } from "../lib/activewearData";

export const metadata = {
  title: "Amazon Activewear Store | ActivewearEtc",
  description:
    "Shop Amazon activewear picks across leggings, sports bras, workout tops, running gear, training shoes, plus-size activewear, men's activewear, and budget finds.",
  alternates: { canonical: "/shop" }
};

const sectionConfig = [
  {
    id: "featured",
    label: "Featured",
    title: "Featured Amazon activewear picks",
    limit: 60,
    match: (_product, index) => index < 180
  },
  {
    id: "leggings",
    label: "Leggings",
    title: "Leggings",
    limit: 90,
    match: (product) => product.category === "Leggings"
  },
  {
    id: "sports-bras",
    label: "Sports Bras",
    title: "Sports bras",
    limit: 72,
    match: (product) => product.category === "Sports Bras"
  },
  {
    id: "yoga",
    label: "Yoga",
    title: "Yoga wear",
    limit: 90,
    match: (product) => product.category === "Yoga Wear" || product.name.includes("Yoga")
  },
  {
    id: "running",
    label: "Running",
    title: "Running gear",
    limit: 90,
    match: (product) =>
      product.category === "Running Shorts" || product.category === "Running Shoes" || product.name.includes("Running")
  },
  {
    id: "shoes",
    label: "Shoes",
    title: "Training and running shoes",
    limit: 72,
    match: (product) => product.category === "Training Shoes" || product.category === "Running Shoes"
  },
  {
    id: "workout-tops",
    label: "Tops",
    title: "Workout tops",
    limit: 72,
    match: (product) => product.category === "Workout Tops"
  },
  {
    id: "men",
    label: "Men",
    title: "Men's activewear",
    limit: 60,
    match: (product) => product.category === "Men's Activewear" || product.name.includes("Men's")
  },
  {
    id: "plus-size",
    label: "Plus-Size",
    title: "Plus-size activewear",
    limit: 60,
    match: (product) => product.category === "Plus-Size Activewear" || product.name.includes("Plus-Size")
  },
  {
    id: "budget",
    label: "Budget",
    title: "Budget-friendly activewear",
    limit: 60,
    match: (product) => product.category === "Budget Activewear" || product.name.includes("Budget-Friendly")
  }
];

function buildStoreSections() {
  const used = new Set();

  return sectionConfig
    .map((section) => {
      const products = [];

      sampleProducts.forEach((product, index) => {
        if (products.length >= section.limit || used.has(product.href) || !section.match(product, index)) {
          return;
        }

        used.add(product.href);
        products.push(product);
      });

      return { ...section, products };
    })
    .filter((section) => section.products.length > 0);
}

const storeSections = buildStoreSections();
const productCount = storeSections.reduce((total, section) => total + section.products.length, 0);
const shopperShortcutLinks = [
  { href: "/compare/adidas-vs-lululemon-leggings", label: "Adidas vs lululemon leggings" },
  { href: "/compare/adidas-vs-lululemon-yoga", label: "Adidas vs lululemon yoga" },
  { href: "/queries/best-yoga-leggings-for-women", label: "Best yoga leggings" },
  { href: "/brands/adidas/leggings", label: "Adidas leggings" },
  { href: "/queries/running-shoe-size-guide", label: "Running shoe size guide" },
  { href: "/queries/walmart-sports-bras-review-evaluation", label: "Walmart sports bras" },
  { href: "/styles/compression-wear", label: "Compression wear" },
  { href: "/queries/nordstrom-activewear", label: "Nordstrom activewear" },
  { href: "/queries/best-mens-activewear-brands", label: "Men's activewear brands" }
];

function getStoreTone(product) {
  const category = product.category.toLowerCase();
  const name = product.name.toLowerCase();

  if (category.includes("sports bra")) return "rose";
  if (category.includes("yoga") || name.includes("yoga")) return "sage";
  if (category.includes("running") || name.includes("running")) return "sky";
  if (category.includes("shoe")) return "sand";
  if (category.includes("men")) return "slate";
  if (category.includes("plus")) return "peach";
  if (category.includes("budget")) return "mint";
  if (category.includes("top") || category.includes("hoodie")) return "cream";

  return "linen";
}

function StoreProductCard({ product }) {
  const affiliateUrl = buildAffiliateLink(product);

  return (
    <article className="store-product-card">
      <Link
        href={product.href}
        className={`store-product-art store-tone-${getStoreTone(product)}`}
        aria-label={`View details for ${product.brand} ${product.name}`}
      >
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.imageAlt} loading="lazy" />
        ) : (
          <>
            <span className="store-art-label">{product.category}</span>
            <span className="store-art-brand">{product.brand}</span>
          </>
        )}
      </Link>
      <div className="store-product-body">
        <div className="store-product-meta">
          <span>{product.badge}</span>
          <span>{product.merchant}</span>
        </div>
        <h3>
          <Link href={product.href}>{product.brand} {product.name}</Link>
        </h3>
        <p>{product.bestFor}</p>
        <div className="store-product-tags" aria-label="Product shopping details">
          <span>{product.category}</span>
          <span>{product.priceRange}</span>
        </div>
      </div>
      <div className="store-product-actions">
        <a href={affiliateUrl} target="_blank" rel="nofollow sponsored noopener" className="store-amazon-button">
          Shop on Amazon
        </a>
      </div>
    </article>
  );
}

export default function ShopPage() {
  return (
    <main id="top" className="page-shell store-shell">
      <section className="storefront-hero">
        <span className="eyebrow">Amazon Store</span>
        <h1>Shop activewear picks on Amazon.</h1>
        <p>
          {productCount} activewear picks organized for quick browsing, clean comparison, and direct Amazon checkout.
        </p>
        <div className="storefront-jump-links" aria-label="Shop categories">
          {storeSections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </div>
        <div className="storefront-shortcuts" aria-label="Popular shopping guides">
          {shopperShortcutLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <p className="storefront-disclosure">
          As an Amazon Associate, we may earn from qualifying purchases. Check final prices, sizes, colors, shipping, and availability on Amazon before buying.
        </p>
      </section>

      {storeSections.map((section) => (
        <section key={section.id} id={section.id} className="storefront-section">
          <div className="storefront-section-header">
            <div>
              <span className="card-kicker">{section.products.length} picks</span>
              <h2>{section.title}</h2>
            </div>
            <a href="#top" className="storefront-top-link">
              Back to top
            </a>
          </div>
          <div className="store-product-grid">
            {section.products.map((product) => (
              <StoreProductCard key={product.href} product={product} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
