'use client'

import React, { useContext } from "react";
import Link from "next/link";

const Products = () => {
  const data = [
    {
      id: 1,
      img: "https://keramo.in/upload/p/SHUTTLE%20KILN.jpg",
      title: "Shuttle Klin Furnaces",
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/PR/IJ/OS/SELLER-36709685/roller-hearth-furnace-500x500.jpg",
      title: "Roller Furnace",
    },
    {
      id: 3,
      img: "https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg",
      title: "Pit Pot Furnace",
    },
    {
      id: 4,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/6/312078/rotary-hearth-furnace-500x500.jpeg",
      title: "Rotary Hearth Furnace",
    },
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