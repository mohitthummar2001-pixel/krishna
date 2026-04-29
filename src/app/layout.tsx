import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { TopHeader } from "@/components/TopHeader";
import { Analytics } from "@vercel/analytics/react"; // ✅ ADD THIS


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.krishnaschools.com"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  title: "Best School in Jamnagar | Krishna School",
  description:
    "Krishna School in Khodiyar Colony, Jamnagar offers quality education from Std. 1 to 12 (Science & Commerce) in English & Gujarati medium with strong academics and holistic development.",
  applicationName: "Krishna School",
  keywords: [
    "Krishna School",
    "Best School in Jamnagar",
    "School in Jamnagar",
    "English Medium School Jamnagar",
    "Gujarati Medium School Jamnagar",
    "Science Commerce School Jamnagar",
    "Std 1 to 12",
    "Krishna School Jamnagar",
    "Best school in Jamnagar",
    "Schools in Jamnagar",
    "Private school Jamnagar",
    "Science Commerce school Jamnagar",
    "10th 12th school Jamnagar",
    "Kids school Jamnagar"
  ],
  alternates: {
    canonical: "/", // 🔥 important
  },
  openGraph: {
    title: "Best School in Jamnagar | Krishna School",
    description:
      "Admissions open for Std. 1 to 12 (Science & Commerce). English & Gujarati medium. Khodiyar Colony, Jamnagar.",
    type: "website",
    images: [
      {
        url: "/Logo/Krishna School Logo 1.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best School in Jamnagar | Krishna School",
    description:
      "Admissions open for Std. 1 to 12 (Science & Commerce). English & Gujarati medium. Khodiyar Colony, Jamnagar.",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <TopHeader /> */}
        <Navbar />
        {children}
                <Analytics />

      </body>
    </html>
  );
}
