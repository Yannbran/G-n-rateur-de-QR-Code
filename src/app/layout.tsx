import "./globals.css";
import type { Metadata } from "next";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
