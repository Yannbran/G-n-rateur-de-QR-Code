"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ferme le menu quand on change de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-top">
          <Link href="/" className="nav-brand" onClick={closeMenu}>
            QR Code Generator
          </Link>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`nav-items ${isMenuOpen ? "menu-open" : ""}`}>
          <div className="nav-links">
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className={`nav-link ${pathname === "/about" ? "active" : ""}`}
              onClick={closeMenu}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          <div className="right-elements">
            <ThemeToggle />
            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.tiktok.com/@yann06.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tiktok-link"
                aria-label="Suivez-moi sur TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
