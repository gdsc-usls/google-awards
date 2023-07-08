import "./globals.css";
import type { Metadata } from "next";

import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Google Awards",
  description:
    "A testament to the power of recognition, fueling passion and driving excellence. By honoring outstanding individuals, we inspire a ripple effect of innovation, empower dreams, and shape a brighter future together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-google-reg bg-black text-white max-w-screen-xl mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
