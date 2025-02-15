import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Générateur de QR Code",
  description: "Générez facilement des QR codes à partir d'URLs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <title>Générateur de QR Code</title>
        <meta name="description" content="Générateur de QR Code en ligne" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="page-wrapper">
          <Navbar />
          <main>
            <div className="container">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
