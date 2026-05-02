import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { activityCategoryGuides, activityHubs, categories } from "../../lib/activewearData";

export function generateStaticParams() {
  return activityHubs.map((item) => ({ activity: item.slug }));
}

export default function ActivityPage({ params }) {
  const activity = activityHubs.find((item) => item.slug === params.activity);
  if (!activity) {
    notFound();
  }

  const activityGuides = activityCategoryGuides.filter((item) => item.activitySlug === activity.slug);
  const fallbackCategories = categories
    .filter((item) => item.tags?.includes(activity.slug) || item.summary.toLowerCase().includes(activity.slug))
    .slice(0, Math.max(0, 6 - activityGuides.length));

  return (
    <HubPage
      eyebrow="Activity"
      title={`${activity.name} activewear`}
      intro={activity.summary}
      path={activity.href}
      items={[...activityGuides, ...fallbackCategories]}
    />
  );
}
