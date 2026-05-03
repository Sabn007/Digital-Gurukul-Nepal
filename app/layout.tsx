import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const siteUrl = "https://digital-gurukul.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Digital Gurukul — Learn Coding the Fun Way",
    template: "%s · Digital Gurukul",
  },
  description:
    "Coding education for grades 5–10: interactive lessons, quizzes, and projects in HTML, CSS, JavaScript, Scratch, and Python.",
  openGraph: {
    title: "Digital Gurukul — Learn Coding the Fun Way",
    description:
      "School-friendly coding programs for grades 5–10: HTML, CSS, JavaScript, Scratch, and Python.",
    url: siteUrl,
    siteName: "Digital Gurukul",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Gurukul",
    description: "Coding education for grades 5–10.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
