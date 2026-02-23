import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { BackgroundShapes } from "@/components/BackgroundShapes";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AI Collections & ZATCA Payroll Agent Saudi Arabia | exefai",
  description:
    "Automate collections recovery (30% faster), ZATCA payroll compliance, Saudization tracking with AI agents built for KSA businesses. Riyadh-based support. Free demo.",
  openGraph: {
    title: "AI Collections & ZATCA Payroll Agent Saudi Arabia | exefai",
    description:
      "Automate collections recovery (30% faster), ZATCA payroll compliance, Saudization tracking with AI agents built for KSA businesses. Riyadh-based support. Free demo.",
    url: "https://insharo.com",
    siteName: "exefai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Collections & ZATCA Payroll Agent Saudi Arabia | exefai",
    description:
      "Automate collections recovery (30% faster), ZATCA payroll compliance, Saudization tracking with AI agents built for KSA businesses. Riyadh-based support. Free demo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${outfit.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <BackgroundShapes />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
