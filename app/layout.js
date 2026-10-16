import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import IntroMark from "@/components/IntroMark";

export const metadata = {
  title: { default: "Ren’ō Kagenami — Original Worlds & Visual Stories", template: "%s | Ren’ō Kagenami" },
  description: "The creator portfolio of Kahlil, featuring Fractured Genesis (set in Astra Noctrya), Parallax Zero, Still Rising, Echoes of Hollow’s Edge, VEXA, and cinematic storytelling.",
  keywords: ["Ren'o Kagenami", "Fractured Genesis", "Astra Noctrya", "Parallax Zero", "Still Rising", "Echoes of Hollow's Edge", "VEXA", "character design", "original fiction"]
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><IntroMark /><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
