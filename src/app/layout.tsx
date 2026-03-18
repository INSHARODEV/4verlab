import type { Metadata } from "next";
import { Cairo, Outfit } from "next/font/google"; // Added Outfit
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext"; // Added LanguageProvider
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { BackgroundShapes } from "@/components/BackgroundShapes";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "4ver Lab | First Personalized Skincare Lab in MENA",
  description:
    "Every customer begins with a quick digital skin scan. Experts create a personalized formula based on results, delivered monthly through a premium subscription.",
  openGraph: {
    title: "4ver Lab | First Personalized Skincare Lab in MENA",
    description:
      "Skincare becomes a lifestyle, not just a purchase. Personalized Science 4 YOUR Skin.",
    url: "https://4verlab.sa",
    siteName: "4ver Lab",
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4ver Lab | First Personalized Skincare Lab in MENA",
    description:
      "Skincare becomes a lifestyle, not just a purchase. Personalized Science 4 YOUR Skin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${cairo.variable} ${outfit.variable} font-sans antialiased overflow-x-hidden`}>
        <LanguageProvider>
          <ThemeProvider>
            <BackgroundShapes />
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppWidget />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
