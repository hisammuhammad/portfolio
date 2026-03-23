import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans, Sora, Noto_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

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
          {/* Ambient background glows — hidden in whiteout via opacity */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none theme-whiteout-hide">
            <div className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-[rgba(74,222,128,0.03)] blur-[120px] animate-float-slow" />
            <div className="absolute bottom-[5%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-[rgba(255,107,43,0.02)] blur-[100px] animate-float" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
