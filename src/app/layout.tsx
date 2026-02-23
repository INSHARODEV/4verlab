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
  title: "إكسفاي | تحصيل الديون والرواتب بالذكاء الاصطناعي في السعودية",
  description:
    "أتمتة تحصيل الديون (أسرع بنسبة 30%)، والالتزام بنظام حماية الأجور، ومتابعة التوطين عبر وكلاء ذكاء اصطناعي مصممين للشركات السعودية. دعم من قلب الرياض. اطلب تجربة مجانية الآن.",
  openGraph: {
    title: "إكسفاي | تحصيل الديون والرواتب بالذكاء الاصطناعي في السعودية",
    description:
      "أتمتة تحصيل الديون (أسرع بنسبة 30%)، والالتزام بنظام حماية الأجور، ومتابعة التوطين عبر وكلاء ذكاء اصطناعي مصممين للشركات السعودية. دعم من قلب الرياض. اطلب تجربة مجانية الآن.",
    url: "https://insharo.com",
    siteName: "إكسفاي",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "إكسفاي | تحصيل الديون والرواتب بالذكاء الاصطناعي في السعودية",
    description:
      "أتمتة تحصيل الديون (أسرع بنسبة 30%)، والالتزام بنظام حماية الأجور، ومتابعة التوطين عبر وكلاء ذكاء اصطناعي مصممين للشركات السعودية. دعم من قلب الرياض. اطلب تجربة مجانية الآن.",
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
