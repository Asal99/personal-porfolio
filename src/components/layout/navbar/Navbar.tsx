"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import { usePathname } from "next/navigation";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">Portfolio</div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a
          href="/"
          className={pathname === "/" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="/about"
          className={pathname === "/about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </a>
        <a
          href="/portfolio"
          className={pathname === "/portfolio" ? "active" : ""}
          onClick={closeMenu}
        >
          Portfolio
        </a>
        <a
          href="/contact"
          className={pathname === "/contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>
        <a
          href="/blogs"
          className={pathname === "/blogs" ? "active" : ""}
          onClick={closeMenu}
        >
          Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
