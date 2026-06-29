"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/" className="logo" onClick={closeMenu}>
        Portfolio
      </Link>

      <button
        type="button"
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link
          href="/"
          className={pathname === "/" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={pathname === "/about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          href="/portfolio"
          className={`nav-logo ${pathname === "/portfolio" ? "active" : ""}`}
          onClick={closeMenu}
        >
          Portfolio
        </Link>

        <Link
          href="/contact"
          className={pathname === "/contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
