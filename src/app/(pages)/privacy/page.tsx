import React from "react";

export default function PrivacyPage() {
  return (
    <div className="page-content">
      <h1>Politique de Confidentialité</h1>
      <div className="content-section">
        <h2>Protection de vos données</h2>
        <p>
          Nous nous engageons à protéger votre vie privée. Notre générateur de
          QR code fonctionne entièrement côté client, ce qui signifie que :
        </p>
        <ul>
          <li>Aucune donnée n'est stockée sur nos serveurs</li>
          <li>Les QR codes sont générés localement dans votre navigateur</li>
          <li>Les images téléchargées restent sur votre appareil</li>
        </ul>

        <h2>Cookies et Traceurs</h2>
        <p>Notre site n'utilise aucun cookie de tracking ni outil d'analyse.</p>

        <h2>Contact</h2>
        <p>
          Pour toute question concernant notre politique de confidentialité,
          contactez-nous via le formulaire de contact.
        </p>
      </div>
    </div>
  );
}
