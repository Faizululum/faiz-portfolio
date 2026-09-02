import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://faizulum.vercel.app"),
  
  title: {
    default: "Muhammad Faizul Ulum | Full-Stack Developer",
    template: "%s | Faizul Ulum",
  },
  description: "Portfolio of Muhammad Faizul Ulum, a Full-Stack Developer and UI/UX enthusiast specializing in modern JavaScript ecosystem (Next.js, React, Node.js).",
  keywords: [
    "Faizul Ulum",
    "Muhammad Faizul Ulum",
    "Full-Stack Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js",
    "React",
    "Gresik",
    "Indonesia"
  ],
  authors: [{ name: "Muhammad Faizul Ulum" }],
  creator: "Muhammad Faizul Ulum",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faizulum.vercel.app",
    title: "Muhammad Faizul Ulum | Full-Stack Developer",
    description: "Portfolio of Muhammad Faizul Ulum, a Full-Stack Developer and UI/UX enthusiast.",
    siteName: "Faizul Ulum Portfolio",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faizul Ulum Portfolio Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Faizul Ulum | Full-Stack Developer",
    description: "Portfolio of Muhammad Faizul Ulum, a Full-Stack Developer and UI/UX enthusiast.",
    images: ["/img/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Toaster richColors position="top-right" />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}