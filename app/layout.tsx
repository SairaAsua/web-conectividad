import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AlterMundi — Redes Comunitarias Libres",
  description: "La pata tecnológica de otro mundo posible. ONG que facilita el despliegue de redes comunitarias de internet en zonas digitalmente excluidas con software libre y hardware abierto.",
  keywords: ["redes comunitarias", "software libre", "LibreMesh", "LibreRouter", "conectividad", "AlterMundi"],
  authors: [{ name: "AlterMundi" }],
  openGraph: {
    title: "AlterMundi — Redes Comunitarias Libres",
    description: "La pata tecnológica de otro mundo posible.",
    url: "https://altermundi.net",
    siteName: "AlterMundi",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
