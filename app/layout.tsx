import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Import standard fonts
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Body Font (Clean, Neutral)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Heading Font (Modern, Geometric)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "R2DSolutions | Requirement to Development",
    template: "%s | R2DSolutions",
  },
  description: "From Requirement to Development. We build premium Chrome extensions and custom software solutions to elevate your digital workflow.",
  keywords: ["chrome extension", "productivity", "focus flow", "auto tab switcher", "custom development", "software solutions"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://r2dsolutions.com", // Todo: Update with real URL
    siteName: "R2DSolutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/30 selection:text-white"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
