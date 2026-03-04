import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Valley Coaching Institute | PAT, CPAT, BHU, ICAR, CUET Prep | Sehore, MP",
  description: "Green Valley Coaching Institute (GVCI) — 14 Years of Excellence in Sehore, Madhya Pradesh. Specialized and proven coaching for PAT, CPAT, BHU, ICAR, CUET, and ADDET/DAHET. Experience small batches, expert faculty, and exceptional results.",
  keywords: ["PAT coaching Sehore", "CPAT coaching MP", "BHU entrance prep", "ICAR coaching", "CUET coaching Madhya Pradesh", "Green Valley Institute Sehore", "agriculture coaching Sehore", "best PAT institute MP"],
  verification: {
    google: "TkjkfDJgcp-IEpaGyhYFjMApZzA8614Lw1C7-s9LN7I",
  },
  openGraph: {
    title: "Green Valley Coaching Institute | No. 1 Agriculture Coaching in Sehore MP",
    description: "Premium agriculture & science entrance prep coaching in Sehore, MP. 14 Years of cultivating excellence.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/gallery/others/logo.jpeg",
    shortcut: "/gallery/others/logo.jpeg",
    apple: "/gallery/others/logo.jpeg",
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
        <meta name="google-site-verification" content="TkjkfDJgcp-IEpaGyhYFjMApZzA8614Lw1C7-s9LN7I" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
