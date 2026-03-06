import type { Metadata } from "next";
import "./globals.css";
import PageLoaderWrapper from "./components/PageLoaderWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://greenvalleycoachinginstitute.vercel.app"),
  title: "Green Valley Coaching Institute | PAT, PVT, BHU, CUET(ICAR) Prep | Sehore, MP",
  description: "Green Valley Coaching Institute (GVCI) - Since 2011 in Sehore, Madhya Pradesh. Specialized and proven coaching for PAT, PVT, BHU, CUET(ICAR), and ADDET/DAHET.",
  keywords: [
    "PAT coaching Sehore",
    "PVT coaching MP",
    "BHU entrance prep",
    "ICAR coaching",
    "CUET(ICAR) coaching Madhya Pradesh",
    "Green Valley Institute Sehore",
    "agriculture coaching Sehore",
    "best PAT institute MP"
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "TkjkfDJgcp-IEpaGyhYFjMApZzA8614Lw1C7-s9LN7I",
  },
  openGraph: {
    title: "Green Valley Coaching Institute | No. 1 Agriculture Coaching in Sehore MP",
    description: "Premium agriculture and science entrance prep coaching in Sehore, MP.",
    url: "https://greenvalleycoachinginstitute.vercel.app",
    siteName: "Green Valley Coaching Institute",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo-tab.jpg",
        width: 512,
        height: 512,
        alt: "Green Valley Coaching Institute logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Valley Coaching Institute",
    description: "PAT, PVT, BHU, CUET(ICAR) coaching in Sehore, MP.",
    images: ["/logo-tab.jpg"],
  },
  icons: {
    icon: "/logo-tab.jpg",
    shortcut: "/logo-tab.jpg",
    apple: "/logo-tab.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-tab.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo-tab.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo-tab.jpg" />
        <meta name="google-site-verification" content="TkjkfDJgcp-IEpaGyhYFjMApZzA8614Lw1C7-s9LN7I" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Green Valley Coaching Institute",
              url: "https://greenvalleycoachinginstitute.vercel.app",
              logo: "https://greenvalleycoachinginstitute.vercel.app/logo-tab.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Englishpura",
                addressLocality: "Sehore",
                addressRegion: "Madhya Pradesh",
                postalCode: "466001",
                addressCountry: "IN"
              },
              telephone: ["+91-9926205683", "+91-9340534982"]
            })
          }}
        />
        <PageLoaderWrapper>{children}</PageLoaderWrapper>
      </body>
    </html>
  );
}
