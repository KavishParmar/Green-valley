import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Valley Coaching Institute | PAT, CPAT, BHU, CPET Prep | Sehore, MP",
  description: "Green Valley Coaching Institute (GVCI) at Englishpura, Sehore, Madhya Pradesh. Expert coaching for PAT, CPAT, BHU, and CPET entrance exams. Small batches, personalized mentoring, and scholarship programs.",
  keywords: "PAT coaching Sehore, CPAT coaching MP, BHU entrance prep, CPET coaching, Green Valley Institute, agriculture coaching Sehore",
  openGraph: {
    title: "Green Valley Coaching Institute | Sehore MP",
    description: "Premium agriculture & science entrance prep coaching in Sehore, MP.",
    type: "website",
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
