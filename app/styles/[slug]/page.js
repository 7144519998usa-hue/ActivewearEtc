import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { categories, editorialHubs, fabricGuides, fitGuides, segmentCategoryGuides } from "../../lib/activewearData";

const stylePages = [...categories, ...editorialHubs, ...fabricGuides].filter((item) => item.href.startsWith("/styles/"));
const metadataOverrides = {
  "compression-wear": {
    title: "Compression Wear: Leggings, Tights, Tops, Fit",
    description: "Compare compression wear by fit, support, comfort, stretch, gym use, yoga use, layering, price, and return policy."
  },
  "premium-activewear": {
    title: "Premium Activewear: Fabric, Fit, Value",
    description: "Compare premium activewear by fabric quality, fit consistency, construction, support, style, price, sale timing, and returns."
  },
  "workout-tops": {
    title: "Workout Tops: Tanks, Tees, Long Sleeves",
    description: "Compare workout tops by sweat handling, fabric feel, length, coverage, gym use, running use, price, and returns."
  },
  joggers: {
    title: "Joggers: Workout, Travel, Athleisure Fits",
    description: "Compare joggers by taper, pockets, fabric weight, mobility, gym use, travel comfort, price, and return policy."
  }
};

export function generateStaticParams() {
  return stylePages.map((item) => ({ slug: item.href.split("/").pop() }));
}

export function generateMetadata({ params }) {
  const page = stylePages.find((item) => item.href === `/styles/${params.slug}`);

  if (!page) {
    return {};
  }

  return {
    title: metadataOverrides[params.slug]?.title || `${page.name || page.title}`,
    description: metadataOverrides[params.slug]?.description || page.summary,
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
          <h2>Fabric details to check</h2>
          <p>
            Fabric descriptions should help you compare feel, activity use, and care expectations. We avoid unsupported
            claims and recommend checking the retailer page before buying.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
