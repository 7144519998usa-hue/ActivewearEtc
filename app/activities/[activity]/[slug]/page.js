import { notFound } from "next/navigation";
import HubPage from "../../../components/HubPage";
import { activityCategoryGuides, activityHubs, brandCategoryGuides, categories, intentGuides } from "../../../lib/activewearData";

function getGuide(params) {
  return activityCategoryGuides.find((item) => item.activitySlug === params.activity && item.slug === params.slug);
}

export function generateStaticParams() {
  const categoryParams = categories
    .filter((item) => item.href.startsWith("/activities/"))
    .map((item) => {
      const [, , activity, slug] = item.href.split("/");
      return { activity, slug };
    });
  const guideParams = activityCategoryGuides.map((guide) => ({ activity: guide.activitySlug, slug: guide.slug }));
  const seen = new Set();

  return [...guideParams, ...categoryParams].filter((params) => {
    const key = `${params.activity}/${params.slug}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

export function generateMetadata({ params }) {
  const guide = getGuide(params);
  const category = categories.find((item) => item.href === `/activities/${params.activity}/${params.slug}`);
  const page = guide || category;

  if (!page) {
    return {};
  }

  return {
    title: `${page.title || page.name}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function ActivityCategoryPage({ params }) {
  const guide = getGuide(params);
  const category = categories.find((item) => item.href === `/activities/${params.activity}/${params.slug}`);
  const page = guide || category;

  if (!page) {
    notFound();
  }

  const activity = activityHubs.find((item) => item.slug === params.activity);
  const relatedBrandPages = brandCategoryGuides
    .filter((item) => item.categorySlug === params.slug)
    .slice(0, 4);
  const relatedIntentPages = intentGuides
    .filter((item) => item.categorySlug === params.slug)
    .slice(0, 2);
  const items = [
    activity,
    ...relatedBrandPages,
    ...relatedIntentPages,
    ...categories.filter((item) => item.href !== page.href)
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage
      eyebrow="Activity category"
      title={page.title || page.name}
      intro={page.summary}
      path={page.href}
      items={items}
    >
      <section className="section">
        <div className="content-card">
          <h2>How to compare this activity fit</h2>
          <p>
            Match the category to the workout first, then check size range, fabric feel, support level, return policy,
            and whether the retailer clearly shows current price and availability.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
