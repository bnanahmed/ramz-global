import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalicon.sa"),
  title: "الرمز العالمي للمقاولات | Global Icon Constructions",
  description:
    "مؤسسة الرمز العالمي للمقاولات — شريككم الموثوق في أعمال التشييد والبناء والتشطيبات والصيانة في المملكة العربية السعودية. جودة عالمية، فريق متخصص، التزام بالمواعيد.",
  keywords:
    "مقاولات, تشييد, بناء, تشطيبات, صيانة, السعودية, مقاول, إنشاء, ترميم, سباكة, كهرباء, كاميرات أمنية",
  authors: [{ name: "الرمز العالمي للمقاولات" }],
  robots: "index, follow",
  openGraph: {
    title: "الرمز العالمي للمقاولات | Global Icon Constructions",
    description:
      "شريككم الموثوق في أعمال التشييد والبناء والتشطيبات والصيانة في المملكة العربية السعودية.",
    type: "website",
    locale: "ar_SA",
    siteName: "الرمز العالمي للمقاولات",
    url: "https://globalicon.sa",
  },
  twitter: {
    card: "summary_large_image",
    title: "الرمز العالمي للمقاولات",
    description: "شريككم الموثوق في البناء والتشييد بالمملكة العربية السعودية",
  },
  alternates: {
    canonical: "https://globalicon.sa",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0A0A0A",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://globalicon.sa",
  name: "الرمز العالمي للمقاولات",
  alternateName: "Global Icon Constructions",
  description:
    "مؤسسة الرمز العالمي للمقاولات — شريككم الموثوق في أعمال التشييد والبناء والتشطيبات والصيانة في المملكة العربية السعودية.",
  url: "https://globalicon.sa",
  telephone: ["+966500807274", "+966500763707"],
  email: "Global.icon.ksa@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
    addressRegion: "المملكة العربية السعودية",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "24.7136",
    longitude: "46.6753",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "22:00",
  },
  sameAs: [
    "https://www.instagram.com/globalicon.ksa",
    "https://twitter.com/globalicon_ksa",
  ],
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="geo.region" content="SA" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen-safe relative">
        {children}
      </body>
    </html>
  );
}
