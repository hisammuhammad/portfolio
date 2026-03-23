import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hisam Muhammad Ameen - IoT & Embedded Systems Engineer",
  description: "Futuristic digital CV of Hisam Muhammad Ameen. Designing intelligent, autonomous systems at the intersection of AI, IoT, and embedded technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-indigo-500/30`}>
        {/* Antigravity background blobs */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/20 blur-[120px] animate-float-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[150px] animate-float" />
        </div>
        {children}
      </body>
    </html>
  );
}
