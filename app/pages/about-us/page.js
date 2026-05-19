import { permanentRedirect } from "next/navigation";

export default function LegacyAboutUsPage() {
  permanentRedirect("/about");
}
