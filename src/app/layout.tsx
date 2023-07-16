import "./globals.css";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Google Awards",
  description:
    "A testament to the power of recognition, fueling passion and driving excellence. By honoring outstanding individuals, we inspire a ripple effect of innovation, empower dreams, and shape a brighter future together.",
  openGraph: {
    type: "website",
    title: "Google Awards",
    description:
      "A testament to the power of recognition, fueling passion and driving excellence. By honoring outstanding individuals, we inspire a ripple effect of innovation, empower dreams, and shape a brighter future together.",
    url: "https://awards.gdsc-usls.live/",
    images: [
      "https://user-images.githubusercontent.com/69457996/252296037-50595eb1-1886-4062-b7e1-2b28a94e385c.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-google-reg bg-black text-secondary-100">
        <NextTopLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
