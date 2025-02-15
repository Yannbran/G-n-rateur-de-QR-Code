import React from "react";

export default function AboutPage() {
  return (
    <div className="page-content">
      <h1>À propos de QR Code Generator</h1>
      <div className="content-section">
        <h2>Notre Mission</h2>
        <p>
          QR Code Generator est un outil gratuit et simple d'utilisation
          permettant de créer des QR codes personnalisés pour vos besoins
          professionnels ou personnels.
        </p>

        <h2>Caractéristiques</h2>
        <ul>
          <li>Création instantanée de QR codes</li>
          <li>Personnalisation complète (couleurs, taille, logo)</li>
          <li>Haute qualité d'export</li>
          <li>Interface intuitive</li>
          <li>Formats multiples (PNG, JPEG, WebP)</li>
        </ul>

        <h2>Technologies</h2>
        <p>
          Notre application est construite avec les dernières technologies web
          pour garantir performance et fiabilité :
        </p>
        <ul>
          <li>Next.js pour le framework</li>
          <li>React pour l'interface utilisateur</li>
          <li>TypeScript pour la fiabilité du code</li>
        </ul>
      </div>
    </div>
  );
}
