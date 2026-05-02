import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandHubs, categories } from "../../lib/activewearData";

export function generateStaticParams() {
  return brandHubs.map((brand) => ({ slug: brand.slug }));
}

export default function BrandPage({ params }) {
  const brand = brandHubs.find((item) => item.slug === params.slug);
  if (!brand) {
    notFound();
  }

  return (
    <HubPage
      eyebrow="Brand"
      title={`${brand.name} activewear`}
      intro={brand.summary}
      path={brand.href}
      items={categories.slice(0, 6)}
    />
  );
}
