'use client'

import React, { useContext } from "react";
import Link from "next/link";

const Products = () => {
  const data = [
    {
      id: 1,
      img: "https://keramo.in/upload/p/SHUTTLE%20KILN.jpg",
      title: "Shuttle Klin Furnaces",
      description: "High-performance shuttle kiln furnaces for precise temperature control",
      price: "Starting from Rs 5 Lakhs",
      specs: ["Temperature: 500-1400°C", "Capacity: 100-5000 kg", "Power: Electric/Gas"]
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/PR/IJ/OS/SELLER-36709685/roller-hearth-furnace-500x500.jpg",
      title: "Roller Furnace",
      description: "Continuous processing furnaces for high-volume production",
      price: "Starting from Rs 8 Lakhs",
      specs: ["Temperature: Up to 1200°C", "Capacity: 500-10000 kg/hr", "Power: Gas/Electric"]
    },
    {
      id: 3,
      img: "https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg",
      title: "Pit Pot Furnace",
      description: "Versatile pit furnaces for various heat treatment applications",
      price: "Starting from Rs 6 Lakhs",
      specs: ["Temperature: Up to 800°C", "Capacity: 200-2000 kg", "Power: Electric"]
    },
    {
      id: 4,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/6/312078/rotary-hearth-furnace-500x500.jpeg",
      title: "Rotary Hearth Furnace",
      description: "Advanced rotary hearth technology for specialized heat treatment",
      price: "Starting from Rs 10 Lakhs",
      specs: ["Temperature: Up to 1000°C", "Capacity: 1000-5000 kg", "Power: Electric/Gas"]
    },
    {
      id: 5,
      img: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      title: "Box Furnace",
      description: "Compact box furnaces for laboratory and small-scale applications",
      price: "Starting from Rs 3 Lakhs",
      specs: ["Temperature: 600-1200°C", "Capacity: 50-500 kg", "Power: Electric"]
    },
    {
      id: 6,
      img: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      title: "Induction Furnace",
      description: "Energy-efficient induction furnaces for melting applications",
      price: "Starting from Rs 12 Lakhs",
      specs: ["Temperature: Up to 1600°C", "Capacity: 500-5000 kg", "Power: Electric"]
    }
  ];

  const ProductCard = ({ item }) => {
    return (
      <div className="product-card">
        <div className="product-img-container">
          <img
            alt={item.title}
            src={item.img}
            className="product-img"
          />
        </div>
        <h3 className="product-title">{item.title}</h3>
        <p className="product-description">{item.description}</p>
        <p className="product-price">{item.price}</p>
        <div className="product-specs">
          <h4>Specifications:</h4>
          <ul>
            {item.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        .products-container {
          min-height: 100vh;
          background-color: #f8f9fa;
          padding: 2rem 1rem;
        }

        .products-section {
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 5rem;
        }

        .products-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 3rem;
          color: #f35656;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          overflow: hidden;
          text-align: center;
          padding: 20px;
        }

        .product-img-container {
          height: 230px;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .product-description {
          color: #666;
          font-size: 0.95rem;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .product-price {
          font-size: 1.2rem;
          font-weight: bold;
          color: #f35656;
          margin-bottom: 15px;
        }

        .product-specs {
          text-align: left;
        }

        .product-specs h4 {
          font-size: 1rem;
          color: #333;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .product-specs ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .product-specs li {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 5px;
          padding-left: 15px;
          position: relative;
        }

        .product-specs li:before {
          content: "•";
          color: #f35656;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
      `}</style>

      <div className="products-container">
        <div className="products-section">
          <h2 className="products-title">Our Products</h2>
          <div className="products-grid">
            {data.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;