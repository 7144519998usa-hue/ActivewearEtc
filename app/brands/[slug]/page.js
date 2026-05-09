import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandActivityGuides, brandCategoryGuides, brandConcernGuides, brandHubs, categories } from "../../lib/activewearData";

export function generateStaticParams() {
  return brandHubs.map((brand) => ({ slug: brand.slug }));
}

export function generateMetadata({ params }) {
  const brand = brandHubs.find((item) => item.slug === params.slug);
  if (!brand) return {};

  return {
    title: `${brand.name} Activewear`,
    description: brand.summary,
    alternates: { canonical: brand.href },
    openGraph: {
      title: `${brand.name} Activewear`,
      description: brand.summary,
      url: brand.href
    }
  };
}

export default function BrandPage({ params }) {
  const brand = brandHubs.find((item) => item.slug === params.slug);
  if (!brand) {
    notFound();
  }

  const brandGuides = brandCategoryGuides.filter((item) => item.brandSlug === brand.slug);
  const activityGuides = brandActivityGuides.filter((item) => item.brandSlug === brand.slug);
  const concernGuides = brandConcernGuides.filter((item) => item.brandSlug === brand.slug);
  const items = [
    ...activityGuides,
    ...brandGuides,
    ...concernGuides.slice(0, 4),
    ...categories
  ].slice(0, 8);

  return (
    <HubPage
      eyebrow="Brand"
      title={`${brand.name} activewear`}
      intro={brand.summary}
      path={brand.href}
      items={items}
    />
  );
}
