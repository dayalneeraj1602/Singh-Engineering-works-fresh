import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-section">
            <h3>Singh Engineering Works</h3>
            <p>Your trusted partner for industrial solutions</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@singhengineeringworks.com</p>
            <p>Phone: +91 XXX XXX XXXX</p>
            <p>Address: Your Address Here</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="LinkedIn">LI</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2024 Singh Engineering Works. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background-color: var(--primary-color);
          color: var(--white);
          padding: 50px 0 0;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 30px;
        }

        .footer-section h3, .footer-section h4 {
          margin-bottom: 15px;
          color: var(--white);
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 10px;
        }

        .footer-section a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: var(--secondary-color);
        }

        .footer-section p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 8px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .social-links a:hover {
          background-color: var(--secondary-color);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 20px 0;
          text-align: center;
        }

        .footer-bottom p {
          color: rgba(255,255,255,0.6);
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}