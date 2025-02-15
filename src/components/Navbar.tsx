"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link href="/" className="nav-brand">
          QR Code Generator
        </Link>

        <div className="nav-items">
          <div className="nav-links">
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/RemyLau"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yann-lopez-32b340206/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@yann.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
