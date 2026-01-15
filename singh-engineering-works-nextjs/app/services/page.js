'use client'

import React, { useContext } from "react";
import Link from "next/link";

const Services = () => {
  const dataInfo = [
    {
      id: 1,
      imgUrl: "https://keramo.in/upload/p/SHUTTLE%20KILN.jpg",
      productTitle: "Furnace",
      ProductDescription: "High-temperature heating device used in industrial processes for material processing.",
      link: "/services/furnace",
    },
    {
      id: 2,
      imgUrl: "https://www.bosch-pt.co.in/binary/ocsmedia/optimized/full/o396235v117_gws_800_appl_05_T6.jpg",
      productTitle: "Metal Tool Room",
      ProductDescription: "Specialized metal tool room offering high-temperature heating solutions for industrial processes, ensuring precision and efficiency in material processing.",
      link: "/services/MetalToolRoom",
    },
    {
      id: 3,
      imgUrl: "https://haryanarubberudyog.com/wp-content/uploads/2020/02/cnc-turning.jpg",
      productTitle: "Manufacturing",
      ProductDescription: "Comprehensive manufacturing services integrating cutting-edge technology to meet the diverse needs of industrial processes and material processing.",
      link: "/services/Manufacturing",
    },
    {
      id: 4,
      imgUrl: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      productTitle: "Furnace Parts",
      ProductDescription: "High-quality furnace parts designed to enhance the performance and longevity of industrial heating systems, supporting seamless material processing.",
      link: "/services/FurnaceParts",
    },
  ];

  const ServiceCard = ({ data }) => {
    return (
      <Link
        href={data.link}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
        className="service-link"
      >
        <div className="service-card">
          <div className="service-img-container">
            <img
              src={data.imgUrl || "https://i.stack.imgur.com/y9DpT.jpg"}
              className="service-img"
              alt={data.productTitle}
            />
          </div>
          <h3 className="service-title">{data.productTitle}</h3>
          <p className="service-text">{data.ProductDescription}</p>
        </div>
      </Link>
    );
  };

  return (
    <>
      <style jsx>{`
        .services-container {
          min-height: 100vh;
          background-color: #f8f9fa;
          padding: 2rem 1rem;
        }

        .services-section {
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 5rem;
          margin-bottom: 4rem;
        }

        .services-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 3rem;
          color: #f35656;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-link {
          text-decoration: none;
          color: inherit;
        }

        .service-card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          text-align: center;
          padding: 20px;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .service-img-container {
          height: 230px;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }

        .service-text {
          color: #666;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .service-img-container {
            height: 200px;
          }
        }
      `}</style>

      <div className="services-container">
        <div className="services-section">
          <h2 className="services-title">Our Services</h2>
          <div className="services-grid">
            {dataInfo.map((item) => (
              <ServiceCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;