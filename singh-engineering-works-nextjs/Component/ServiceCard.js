'use client'

    export default function ServiceCard({ title, description, icon }) {
  return (
    <>
      <div className="service-card">
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <style jsx>{`
        .service-card {
          background: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .service-card h3 {
          color: var(--primary-color);
          margin-bottom: 15px;
          font-size: 1.5rem;
        }

        .service-card p {
          color: var(--text-light);
          line-height: 1.6;
        }
      `}</style>
    </>
  )
}