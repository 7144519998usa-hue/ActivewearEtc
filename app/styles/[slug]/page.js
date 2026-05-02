import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { categories, editorialHubs } from "../../lib/activewearData";

const stylePages = [...categories, ...editorialHubs].filter((item) => item.href.startsWith("/styles/"));

export function generateStaticParams() {
  return stylePages.map((item) => ({ slug: item.href.split("/").pop() }));
}

export default function StylePage({ params }) {
  const page = stylePages.find((item) => item.href === `/styles/${params.slug}`);
  if (!page) {
    notFound();
  }

  return (
    <HubPage
      eyebrow="Style"
      title={page.name || page.title}
      intro={page.summary}
      path={page.href}
      items={stylePages.filter((item) => item.href !== page.href).slice(0, 6)}
    />
  );
}
