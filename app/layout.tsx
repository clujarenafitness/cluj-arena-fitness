import type { Metadata } from "next";
import { Inter, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://www.clujarenafitness.ro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cluj Arena Fitness | Sală de Fitness Premium în Stadionul Cluj Arena",
    template: "%s | Cluj Arena Fitness",
  },
  description:
    "Fitness Club Arena Cluj — sală dedicată exclusiv Fitness & Bodybuilding, în incinta Stadionului Cluj Arena. Antrenori certificați, echipamente premium, personal training.",
  keywords: [
    "fitness cluj",
    "sala fitness cluj arena",
    "fitness club arena cluj",
    "bodybuilding cluj",
    "culturism cluj",
    "sala forta cluj",
    "personal training cluj",
    "powerlifting cluj",
  ],
  authors: [{ name: "Fitness Club Arena Cluj" }],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE_URL,
    siteName: "Cluj Arena Fitness",
    title: "Cluj Arena Fitness | Antrenează-te ca un campion",
    description:
      "Sală de fitness premium în Stadionul Cluj Arena, dedicată exclusiv Fitness & Bodybuilding, cu antrenori certificați.",
    images: [
      {
        url: "/images/gym-01.jpg",
        width: 1200,
        height: 630,
        alt: "Cluj Arena Fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cluj Arena Fitness | Antrenează-te ca un campion",
    description:
      "Sală de fitness premium în Stadionul Cluj Arena. Antrenori certificați, echipamente de ultimă generație.",
    images: [
      "/images/gym-01.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Fitness Club Arena Cluj",
  alternateName: "Cluj Arena Fitness",
  url: SITE_URL,
  telephone: "+40779296500",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Splaiul Independenței nr. 2",
    addressLocality: "Cluj-Napoca",
    addressCountry: "RO",
  },
  openingHours: ["Mo-Fr 07:00-22:00", "Sa 09:00-18:00"],
  sameAs: [
    "https://www.instagram.com/cluj.arena.fitness",
    "https://www.facebook.com/share/1Edwg9Fbcz/?mibextid=wwXIfr",
    "https://vm.tiktok.com/ZNREmrjMM/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
