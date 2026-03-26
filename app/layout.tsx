import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans, Sora, Noto_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import FloatingCVButton from "@/components/FloatingCVButton";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display-sora",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hisam Muhammad Ameen — IoT & Embedded Systems Engineer",
  description:
    "Portfolio of Hisam Muhammad Ameen. Designing intelligent, autonomous systems at the intersection of AI, IoT, and embedded technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${ibmPlexSans.variable} ${sora.variable} ${notoSans.variable} antialiased bg-[var(--background)] text-[var(--foreground)] dot-grid scanline transition-colors duration-400`}
      >
        <ThemeProvider>
          {children}
          <FloatingCVButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
