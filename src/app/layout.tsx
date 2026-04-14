import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://dr-iskakov.kz";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1E3A5F",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Искаков Булат Серикович — Врач-ортопед | Эндопротезирование суставов в Астане",
    template: "%s | Др. Искаков",
  },
  description:
    "Эндопротезирование коленного и тазобедренного суставов с использованием роботизированной системы MAKO. Более 1000 операций, стаж 15+ лет. Приём по предварительной записи, Астана.",
  keywords: [
    "эндопротезирование",
    "ортопед Астана",
    "замена коленного сустава",
    "замена тазобедренного сустава",
    "артроз лечение",
    "MAKO робот",
    "Искаков Булат",
    "ортопед травматолог",
    "протез сустава",
    "гонартроз",
    "коксартроз",
  ],
  authors: [{ name: "Искаков Булат Серикович" }],
  creator: "Искаков Булат Серикович",
  publisher: "Искаков Булат Серикович",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: siteUrl,
    siteName: "Др. Искаков — Эндопротезирование суставов",
    title: "Искаков Булат Серикович — Врач-ортопед",
    description:
      "Эндопротезирование коленного и тазобедренного суставов с высокой точностью. Система MAKO. Запись на консультацию.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Др. Искаков — Эндопротезирование суставов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Искаков Булат Серикович — Врач-ортопед",
    description: "Эндопротезирование коленного и тазобедренного суставов",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "health",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#organization`,
      name: "Др. Искаков — Эндопротезирование суставов",
      url: siteUrl,
      telephone: "+77779951921",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Проспект Мангилик Ел, 80",
        addressLocality: "Астана",
        addressCountry: "KZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "51.128201",
        longitude: "71.446700",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "14:00",
        },
      ],
      priceRange: "$$",
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}/#physician`,
      name: "Искаков Булат Серикович",
      url: siteUrl,
      image: `${siteUrl}/doctor-photo.jpg`,
      telephone: "+77779951921",
      medicalSpecialty: {
        "@type": "MedicalSpecialty",
        name: "Ортопедия",
      },
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Хирург-ортопед, специалист по эндопротезированию коленного и тазобедренного суставов. Стаж более 15 лет, более 1000 операций.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Эндопротезирование коленного сустава",
      procedureType: "Surgical",
      description:
        "Замена поврежденного коленного сустава на искусственный имплант с использованием роботизированной системы MAKO",
      howPerformed:
        "Операция выполняется с помощью роботизированной системы MAKO, обеспечивающей точность установки импланта до 0.5мм",
    },
    {
      "@type": "MedicalProcedure",
      name: "Эндопротезирование тазобедренного сустава",
      procedureType: "Surgical",
      description:
        "Замена поврежденного тазобедренного сустава на искусственный имплант",
      howPerformed:
        "Операция выполняется с использованием современных технологий планирования и высокоточных инструментов",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько служит протез сустава?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Современные эндопротезы рассчитаны на 15-25 лет службы при соблюдении рекомендаций врача.",
          },
        },
        {
          "@type": "Question",
          name: "Когда можно ходить после операции?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Первые шаги с опорой делаются уже на следующий день после операции. Ходьба без опоры обычно возможна через 4-8 недель.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Skip link for accessibility - placed before all content */}
        <a href="#main-content" className="skip-link">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
