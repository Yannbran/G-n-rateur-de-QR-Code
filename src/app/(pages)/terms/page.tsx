import React from "react";

export default function TermsPage() {
  return (
    <div className="page-content">
      <h1>Conditions d'Utilisation</h1>
      <div className="content-section">
        <h2>Utilisation du Service</h2>
        <p>
          En utilisant notre générateur de QR code, vous acceptez les conditions
          suivantes :
        </p>
        <ul>
          <li>Usage personnel ou commercial autorisé</li>
          <li>Interdiction de revente du service</li>
          <li>Respect des droits d'auteur pour les logos utilisés</li>
        </ul>

        <h2>Limitation de Responsabilité</h2>
        <p>Nous ne pouvons garantir :</p>
        <ul>
          <li>La disponibilité continue du service</li>
          <li>La lisibilité des QR codes sur tous les lecteurs</li>
          <li>L'absence d'erreurs dans le service</li>
        </ul>

        <h2>Propriété Intellectuelle</h2>
        <p>
          Les QR codes générés vous appartiennent, mais le design et le code
          source de l'application restent notre propriété.
        </p>
      </div>
    </div>
  );
}
