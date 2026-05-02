import HubPage from "../components/HubPage";
import { bodyFitGuides, editorialHubs, fitGuides } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Sizes and Fit",
  description: "Compare activewear by size range, fit system, plus-size availability, petite/tall logic, compression, rise, and inseam.",
  alternates: { canonical: "/sizes-fit" }
};

export default function SizesFitPage() {
  return (
    <HubPage
      eyebrow="Sizes and fit"
      title="Activewear fit guidance without the guesswork"
      intro="Fit pages organize size systems, body-type notes, support levels, rise, inseam, and material behavior into clear comparison paths."
      path="/sizes-fit"
      items={[
        ...editorialHubs.filter((item) => item.href.startsWith("/sizes-fit/")),
        ...fitGuides.slice(0, 8),
        ...bodyFitGuides.slice(0, 8)
      ]}
    />
  );
}
