
import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RI3O Studio — Digital Experiences & Web Design",
    template: "%s | RI3O Studio",
  },

  description:
    "RI3O Studio designs and builds digital experiences, Shopify stores and modern websites for ambitious brands and businesses.",

  keywords: [
    "RI3O Studio",
    "Web Design",
    "Shopify Development",
    "Website Development",
    "E-commerce Design",
    "Digital Creative Studio",
  ],

  authors: [{ name: "RI3O Studio" }],

 openGraph: {
  title: "RI3O Studio — Digital Experiences",
  description:
    "We build digital experiences that move brands forward.",
  siteName: "RI3O Studio",
  type: "website",
  locale: "en_US",
  images: [
    {
      url: "/ri3o-social.png",
      width: 1648,
      height: 928,
      alt: "RI3O Studio — Digital Creative Studio",
    },
  ],
},

  twitter: {
    card: "summary_large_image",
    title: "RI3O Studio — Digital Experiences",
    description:
      "Web design, Shopify development and digital experiences for ambitious brands.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
