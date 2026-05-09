import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { categories, editorialHubs, fabricGuides, fitGuides, segmentCategoryGuides } from "../../lib/activewearData";

const stylePages = [...categories, ...editorialHubs, ...fabricGuides].filter((item) => item.href.startsWith("/styles/"));

export function generateStaticParams() {
  return stylePages.map((item) => ({ slug: item.href.split("/").pop() }));
}

export function generateMetadata({ params }) {
  const page = stylePages.find((item) => item.href === `/styles/${params.slug}`);

  if (!page) {
    return {};
  }

  return {
    title: `${page.name || page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function StylePage({ params }) {
  const page = stylePages.find((item) => item.href === `/styles/${params.slug}`);
  if (!page) {
    notFound();
  }

  const category = categories.find((item) => item.slug === page.categorySlug);
  const relatedFitGuides = fitGuides
    .filter((item) => item.categorySlug === page.categorySlug)
    .slice(0, 2);
  const relatedSegmentPages = segmentCategoryGuides
    .filter((item) => item.categorySlug === page.categorySlug)
    .slice(0, 3);
  const items = [
    category,
    ...relatedFitGuides,
    ...relatedSegmentPages,
    ...stylePages.filter((item) => item.href !== page.href)
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage
      eyebrow="Style"
      title={page.name || page.title}
      intro={page.summary}
      path={page.href}
      items={items}
    >
      <section className="section">
        <div className="content-card">
          <h2>Fabric claim guardrails</h2>
          <p>
            Fabric language should help shoppers compare feel, use case, and care expectations. ActivewearEtc avoids
            unsupported performance promises and treats retailer claims as signals to verify before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
