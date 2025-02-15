"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link href="/" className="nav-brand">
          QR Code Generator
        </Link>

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
      </div>
    </nav>
  );
};

export default Navbar;
