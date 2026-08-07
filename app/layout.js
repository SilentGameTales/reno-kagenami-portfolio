import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import IntroMark from "@/components/IntroMark";

export const metadata = {
  title: {
    default: "Ren’ō Kagenami — Original Worlds & Visual Stories",
    template: "%s | Ren’ō Kagenami"
  },
  description:
    "The creator portfolio of Kahlil: original worlds, character design, music, fiction, and AI-assisted visual storytelling.",
  keywords: [
    "Ren'o Kagenami",
    "Astra Noctrya",
    "visual storytelling",
    "character design",
    "AI cinema",
    "original fiction"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <IntroMark />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
