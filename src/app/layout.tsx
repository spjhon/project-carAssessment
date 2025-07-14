import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

/**
 * Theme provider import
 */
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jan Autos - Peritaje y Asesoria Automotriz",
  description: "Servicio profesional de peritaje de vehículos. Revisión completa antes de comprar tu carro usado: mecánica, estructural y legal.Servicio Profesional de Cuidado de Mascotas en la Ciudad de Manizales",

  //BASIC METADATA
  generator: 'Next.js',
  applicationName: 'Jan Autos',
  referrer: 'origin-when-cross-origin',
  keywords: [
  "peritaje de vehículos",
  "peritaje de carros usados",
  "peritaje vehicular a domicilio",
  "peritaje de autos antes de comprar",
  "servicio de peritaje automotriz",
  "peritaje técnico de vehículos",
  "peritaje para compra de carro",
  "inspección vehicular profesional",
  "peritaje de autos usados",
  "peritajes para carros usados",
  "peritaje en concesionarios",
  "peritaje preventivo de vehículos",
  "servicio de peritaje en línea",
  "peritaje de vehículo en sitio",
  "peritaje completo de carro",
  "peritaje vehicular económico",
  "peritaje certificado para vehículos",
  "peritaje de vehículos a domicilio",
  "peritaje automotriz profesional",
  "peritaje de carros en Bogotá",
  "peritaje de carros en Medellín",
  "peritaje de carros en Cali",
  "peritaje de camionetas usadas",
  "revisión de vehículos usados",
  "diagnóstico vehicular completo",
  "inspección técnica de carro usado",
  "peritaje antes de comprar vehículo",
  "peritaje de vehículos particulares",
  "peritaje exprés de autos",
  "revisión pre compra de carro",
  "peritaje mecánico y estructural",
  "verificación de antecedentes vehiculares",
  "servicio de peritaje móvil",
  "peritaje de autos a domicilio",
  "inspección de vehículo usado",
  "peritaje de motos usadas",
  "valoración de vehículo usado",
  "peritaje profesional de autos"
],
  authors: [{ name: 'Camilo' }, { name: 'Aristizabal', url: 'https://nextjs.org' }],
  creator: 'Camilo Aristizabal',
  publisher: 'Camilo Dev',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Jan Autos',
    description: "Peritaje Profesional",
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '../../public/WhatsApp Image 2025-07-12 at 10.46.32.jpeg',
        alt: 'Imagen representativa de Jan Autos',
      }
    ],
  },
  robots: {
    index: true, // Permitir indexación del sitio
    follow: true, // Permitir seguir los enlaces del sitio
    noarchive: true, // Permitir a los motores de búsqueda archivar la página
    nosnippet: true, // Permitir la generación de snippets en los resultados de búsqueda
    notranslate: true, // Permitir la traducción del contenido en motores de búsqueda
    noimageindex: true, // Permitir la indexación de imágenes
    'max-snippet': 1, // Permitir snippets completos
    'max-image-preview': 'large', // Permitir previsualización de imágenes grandes
    'max-video-preview': 1, // Permitir previsualización completa de videos
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jan Autos',
    description: 'Peritaje Profesional',
    site: 'https://project-carassessment.pages.dev/',
    creator: '@CamiloAristizabal',
    images: ['https://example.com/img/og-image.png'], // URL absoluta de la imagen
  },
  category: 'Peritaje Profesional',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f2f2f2] dark:bg-gradient-to-r from-black  to-slate-950 `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="container px-7 xl:px-20 m-auto ">
            {children}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
