import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandActivityGuides, brandCategoryGuides, brandHubs, categories } from "../../lib/activewearData";

export function generateStaticParams() {
  return brandHubs.map((brand) => ({ slug: brand.slug }));
}

export default function BrandPage({ params }) {
  const brand = brandHubs.find((item) => item.slug === params.slug);
  if (!brand) {
    notFound();
  }

  const brandGuides = brandCategoryGuides.filter((item) => item.brandSlug === brand.slug);
  const activityGuides = brandActivityGuides.filter((item) => item.brandSlug === brand.slug);
  const items = [
    ...activityGuides,
    ...brandGuides,
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
