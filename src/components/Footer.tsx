import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>QR Code Generator</h3>
          <p>Générez facilement vos QR codes personnalisés</p>
        </div>

        <div className="footer-section">
          <h4>Fonctionnalités</h4>
          <ul>
            <li>Personnalisation des couleurs</li>
            <li>Ajout de logo</li>
            <li>Texte personnalisé</li>
            <li>Multiple formats d'export</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Liens utiles</h4>
          <ul>
            <li>
              <Link href="/about">À propos</Link>
            </li>
            <li>
              <Link href="/privacy">Confidentialité</Link>
            </li>
            <li>
              <Link href="/terms">Conditions d'utilisation</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} QR Code Generator - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
