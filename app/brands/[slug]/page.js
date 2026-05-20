import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandActivityGuides, brandCategoryGuides, brandConcernGuides, brandHubs, categories } from "../../lib/activewearData";

const metadataOverrides = {
  adidas: {
    title: "Adidas Activewear: Leggings, Shoes, Athleisure",
    description: "Shop and compare Adidas activewear by leggings, running shoes, workout tops, hoodies, athleisure, price, size range, and returns."
  },
  nike: {
    title: "Nike Activewear: Leggings, Shoes, Workout Clothes",
    description: "Shop and compare Nike activewear by leggings, running shoes, workout tops, sports bras, gym clothes, price, size range, and returns."
  },
  lululemon: {
    title: "lululemon Activewear: Leggings, Yoga, Bras",
    description: "Compare lululemon activewear by leggings, yoga wear, sports bras, joggers, premium fabric feel, fit checks, price, and returns."
  },
  gymshark: {
    title: "Gymshark Activewear: Leggings, Sets, Gym Clothes",
    description: "Compare Gymshark activewear by leggings, sports bras, workout tops, gym fits, seller checks, price, size range, and returns."
  }
};

export function generateStaticParams() {
  return brandHubs.map((brand) => ({ slug: brand.slug }));
}

export function generateMetadata({ params }) {
  const brand = brandHubs.find((item) => item.slug === params.slug);
  if (!brand) return {};

  return {
    title: metadataOverrides[brand.slug]?.title || `${brand.name} Activewear`,
    description: metadataOverrides[brand.slug]?.description || brand.summary,
    alternates: { canonical: brand.href },
    openGraph: {
      title: metadataOverrides[brand.slug]?.title || `${brand.name} Activewear`,
      description: metadataOverrides[brand.slug]?.description || brand.summary,
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
