import { notFound } from "next/navigation";
import HubPage from "../../../components/HubPage";
import { brandCategoryGuides, brandHubs, comparisonGuides, shoppingGuides } from "../../../lib/activewearData";

export function generateStaticParams() {
  return brandCategoryGuides.map((guide) => ({
    slug: guide.brandSlug,
    category: guide.categorySlug
  }));
}

export function generateMetadata({ params }) {
  const guide = brandCategoryGuides.find((item) => item.brandSlug === params.slug && item.categorySlug === params.category);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title} | ActivewearEtc`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function BrandCategoryPage({ params }) {
  const guide = brandCategoryGuides.find((item) => item.brandSlug === params.slug && item.categorySlug === params.category);

  if (!guide) {
    notFound();
  }

  const brand = brandHubs.find((item) => item.slug === guide.brandSlug);
  const relatedGuideCards = shoppingGuides
    .filter((item) => item.tags.some((tag) => guide.tags.map((value) => value.toLowerCase()).includes(tag.toLowerCase())))
    .slice(0, 3)
    .map((item) => ({
      ...item,
      name: item.title,
      href: `/best/${item.slug}`
    }));

  const relatedComparisonCards = comparisonGuides
    .filter((item) => item.relatedHrefs.includes(brand.href))
    .slice(0, 2)
    .map((item) => ({
      ...item,
      name: item.title,
      href: `/compare/${item.slug}`
    }));

  const items = [
    { name: `${brand.name} brand hub`, summary: brand.summary, href: brand.href, tags: ["brand", "fit", "price"] },
    ...relatedGuideCards,
    ...relatedComparisonCards
  ];

  return (
    <HubPage
      eyebrow="Brand guide"
      title={guide.title}
      intro={guide.summary}
      path={guide.href}
      items={items}
    >
      <section className="section">
        <div className="content-card">
          <h2>How ActivewearEtc compares this category</h2>
          <p>
            This page is built for shoppers who already know the brand and category they want to compare. We keep the
            frontend concise while organizing the SEO context in structured summaries, related guides, canonical URLs,
            sitemap entries, and disclosure-safe affiliate language.
          </p>
          <p>
            We do not publish fake reviews or unsupported performance claims. Prices, availability, colors, and sizes can
            change at retailer sites, so shoppers should confirm final details before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
