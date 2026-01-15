'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <Link href="/" className="navbar-brand">
            Singh Engineering Works
          </Link>

          <button 
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          background-color: var(--primary-color);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-brand {
          color: var(--white);
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
        }

        .navbar-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .navbar-toggle span {
          width: 25px;
          height: 3px;
          background-color: var(--white);
          margin: 3px 0;
          transition: 0.3s;
        }

        .navbar-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
        }

        .navbar-menu a {
          color: var(--white);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .navbar-menu a:hover {
          color: var(--secondary-color);
        }

        @media (max-width: 768px) {
          .navbar-toggle {
            display: flex;
          }

          .navbar-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--primary-color);
            flex-direction: column;
            padding: 1rem;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          .navbar-menu.active {
            max-height: 400px;
          }

          .navbar-menu li {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </>
  )
}
