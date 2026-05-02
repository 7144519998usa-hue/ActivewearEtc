import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandCategoryGuides, brandHubs, categories } from "../../lib/activewearData";

export function generateStaticParams() {
  return brandHubs.map((brand) => ({ slug: brand.slug }));
}

export default function BrandPage({ params }) {
  const brand = brandHubs.find((item) => item.slug === params.slug);
  if (!brand) {
    notFound();
  }

  const brandGuides = brandCategoryGuides.filter((item) => item.brandSlug === brand.slug);
  const items = [
    ...brandGuides,
    ...categories.slice(0, Math.max(0, 6 - brandGuides.length))
  ];

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
