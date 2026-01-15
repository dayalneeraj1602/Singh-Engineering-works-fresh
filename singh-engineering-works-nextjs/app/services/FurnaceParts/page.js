'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FurnaceParts = () => {
  const furnaceParts = [
    {
      id: 1,
      title: "HFK Bricks",
      image: "https://3.imimg.com/data3/WF/YQ/MY-2185590/insulation-bricks-500x500.jpg",
      description: "High alumina insulating bricks for furnace lining and construction.",
      features: ["High temperature resistance", "Low thermal conductivity", "Excellent insulation", "Durable construction"]
    },
    {
      id: 2,
      title: "Cold Face Insulation Bricks",
      image: "https://2.wlimg.com/product_images/bc-full/2021/8/207467/cold-face-insulation-bricks-1629280462-5024883.jpeg",
      description: "Specialized insulation bricks for cold face applications.",
      features: ["Superior insulation", "Temperature stability", "Easy installation", "Cost effective"]
    },
    {
      id: 3,
      title: "Ceramic Fiber Board",
      image: "https://2.wlimg.com/product_images/bc-full/2021/8/207467/cold-face-insulation-bricks-1629280462-5024883.jpeg",
      description: "Rigid ceramic fiber boards for high-temperature insulation.",
      features: ["High compressive strength", "Low thermal shrinkage", "Excellent thermal shock resistance", "Precise dimensions"]
    },
    {
      id: 4,
      title: "Fiber Blanket",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Flexible ceramic fiber blankets for versatile insulation applications.",
      features: ["Flexible installation", "High temperature rating", "Low heat storage", "Multiple thicknesses"]
    },
    {
      id: 5,
      title: "Ceramic Fiber Modules",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Pre-compressed ceramic fiber modules for easy installation.",
      features: ["Factory pre-compressed", "Quick installation", "Excellent insulation", "Long service life"]
    },
    {
      id: 6,
      title: "Anchoring Systems",
      image: "https://2.imimg.com/data2/JK/KJ/MY-/anchors-for-ceramic-fibre-l-1000x1000.jpg",
      description: "Complete anchoring systems for ceramic fiber installations.",
      features: ["Various materials", "Custom designs", "Corrosion resistance", "High strength"]
    }
  ];

  const applications = [
    "Industrial Furnaces",
    "Kiln Construction",
    "Heat Treatment Equipment",
    "Ceramic Manufacturing",
    "Glass Industry",
    "Metal Processing",
    "Power Generation",
    "Chemical Processing"
  ];

  const benefits = [
    {
      icon: "fas fa-thermometer-half",
      title: "High Temperature Resistance",
      description: "Withstands extreme temperatures up to 1800°C"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Superior Insulation",
      description: "Excellent thermal insulation properties"
    },
    {
      icon: "fas fa-tools",
      title: "Easy Installation",
      description: "Designed for quick and efficient installation"
    },
    {
      icon: "fas fa-recycle",
      title: "Long Service Life",
      description: "Durable materials with extended lifespan"
    }
  ];

  return (
    <div className="container mt-5" style={{ minHeight: "100vh", paddingTop: "8rem" }}>
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-danger mb-3">Furnace Parts & Components</h1>
          <p className="lead text-muted">
            High-quality refractory materials and furnace components for industrial applications
          </p>
          <div className="s-border mx-auto"></div>
          <div className="m-border mx-auto"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-3">Premium Furnace Components</h3>
              <p className="card-text">
                We specialize in manufacturing and supplying high-quality furnace parts and refractory materials
                essential for industrial heating applications. Our comprehensive range includes insulating bricks,
                ceramic fiber products, anchoring systems, and custom components designed to withstand extreme
                temperatures and harsh operating conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Furnace Parts Grid */}
      <div className="row g-4 mb-5">
        {furnaceParts.map((part) => (
          <div key={part.id} className="col-lg-6 col-xl-4">
            <div className="card h-100 shadow-sm hover-card">
              <div className="card-img-container" style={{ height: "200px", overflow: "hidden" }}>
                <Image
                  src={part.image}
                  alt={part.title}
                  width={400}
                  height={200}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  className="card-img-top"
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-danger fw-bold">{part.title}</h5>
                <p className="card-text text-muted mb-3">{part.description}</p>
                <div className="features">
                  <ul className="list-unstyled">
                    {part.features.map((feature, index) => (
                      <li key={index} className="mb-1">
                        <i className="fas fa-check text-success me-2"></i>
                        <small>{feature}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Why Choose Our Furnace Parts?</h2>
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card text-center border-0 shadow-sm h-100">
                  <div className="card-body">
                    <i className={`${benefit.icon} fa-3x text-danger mb-3`}></i>
                    <h5 className="card-title">{benefit.title}</h5>
                    <p className="card-text text-muted">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Applications</h3>
              <p className="text-center text-muted mb-4">
                Our furnace parts and components are used across various industries:
              </p>
              <div className="row g-3">
                {applications.map((application, index) => (
                  <div key={index} className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-industry text-danger me-3"></i>
                      <span>{application}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Technical Specifications</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-danger">Temperature Ratings</h5>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-temperature-high text-danger me-2"></i>Up to 1800°C for ceramic fibers</li>
                    <li><i className="fas fa-temperature-high text-danger me-2"></i>Up to 1600°C for insulating bricks</li>
                    <li><i className="fas fa-temperature-high text-danger me-2"></i>Custom temperature ranges available</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-danger">Material Properties</h5>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-shield-alt text-success me-2"></i>Low thermal conductivity</li>
                    <li><i className="fas fa-shield-alt text-success me-2"></i>High compressive strength</li>
                    <li><i className="fas fa-shield-alt text-success me-2"></i>Excellent thermal shock resistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card bg-danger text-white border-0">
            <div className="card-body text-center py-4">
              <h3 className="card-title mb-3">Need Furnace Parts?</h3>
              <p className="card-text mb-3">
                Get expert advice on selecting the right furnace components for your application
              </p>
              <Link href="/contact" className="btn btn-light btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnaceParts;