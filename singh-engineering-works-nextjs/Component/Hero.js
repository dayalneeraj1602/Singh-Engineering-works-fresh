'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1 className="hero-title">Singh Engineering Works</h1>
            <p className="hero-subtitle">
              Excellence in Industrial Engineering & Manufacturing
            </p>
            <div className="hero-buttons">
              <Link href="/services" className="hero-button primary">
                Our Services
              </Link>
              <Link href="/contact" className="hero-button secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, #004080 100%);
          min-height: 500px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-overlay {
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          text-align: center;
          color: var(--white);
          padding: 80px 20px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-button {
          padding: 15px 40px;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .hero-button.primary {
          background-color: var(--secondary-color);
          color: var(--white);
        }

        .hero-button.primary:hover {
          background-color: #e55a00;
          transform: translateY(-2px);
        }

        .hero-button.secondary {
          background-color: transparent;
          color: var(--white);
          border: 2px solid var(--white);
        }

        .hero-button.secondary:hover {
          background-color: var(--white);
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  )
}