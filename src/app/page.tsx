import type { Metadata } from "next";
import QRGenerator from "../components/QRGenerator";

export const metadata: Metadata = {
  title: "Accueil | Générateur de QR Code",
};

export default function Page() {
  return (
    <main>
      <h1>Générez votre QrCode personnalisé</h1>
      <QRGenerator />
    </main>
  );
}
