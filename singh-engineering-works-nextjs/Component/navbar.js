'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = pathname === "/";
  const isProducts = pathname === "/products";
  const isServices = pathname === "/services";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`navbar d-flex shadow-out pop sticky-header ${
        isScrolled < 50 && isHome
          ? "text-light"
          : isScrolled > 50
          ? "scrolled "
          : isScrolled >= 50 && isHome && "text-dark"
      }`}
    >
      <div className="navbar-brand d-inline-block fs-1 ls-2">
        <Link className="navbar-brand brand ms-5 fw-bold fs-4 d-flex" href="/">
          <div className="logo mx-2 d-flex">
            <img src="/logosew.png" alt="logo" className="logo" />
            <span
              className={`
            ${isScrolled < 50 && isHome ? "text-light" : "text-dark"}
            `}
            >
              Singh Engineering Works
            </span>
          </div>
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Items */}
      <div
        className={`nav-items me-5 ${isMobileMenuOpen ? "mobile-open" : ""}`}
      >
        <Link
          href="/"
          title="Home"
          className={isHome ? "active" : ""}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          href="/products"
          title="Products"
          onClick={handleLinkClick}
          className={isProducts ? "active" : ""}
        >
          Products
        </Link>
        <Link
          href="/services"
          title="Services"
          onClick={handleLinkClick}
          className={isServices ? "active" : ""}
        >
          Services
        </Link>
        <Link
          href="/gallery"
          title="Gallery"
          onClick={handleLinkClick}
          className={pathname === "/gallery" ? "active" : ""}
        >
          Gallery
        </Link>
        <Link
          href="/about"
          title="About us"
          className={isAbout ? "active" : ""}
          onClick={handleLinkClick}
        >
          About us
        </Link>
        <Link
          href="/contact"
          title="Contact Us"
          className={isContact ? "active" : ""}
          onClick={handleLinkClick}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
