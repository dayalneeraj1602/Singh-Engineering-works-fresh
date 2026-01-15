'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Furnace = () => {
  const furnaceTypes = [
    {
      id: 1,
      title: "Shuttle Kiln Furnaces",
      image: "https://keramo.in/upload/p/SHUTTLE%20KILN.jpg",
      description: "High-performance shuttle kiln furnaces designed for precise temperature control and energy efficiency.",
      features: ["Temperature up to 1400°C", "Automatic loading/unloading", "PLC control system", "Energy efficient"]
    },
    {
      id: 2,
      title: "Roller Hearth Furnaces",
      image: "https://5.imimg.com/data5/PR/IJ/OS/SELLER-36709685/roller-hearth-furnace-500x500.jpg",
      description: "Continuous processing furnaces ideal for high-volume production with consistent quality.",
      features: ["Continuous operation", "High throughput", "Uniform heating", "Automated controls"]
    },
    {
      id: 3,
      title: "Pit Pot Furnaces",
      image: "https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg",
      description: "Versatile pit furnaces suitable for various heat treatment applications.",
      features: ["Deep pit design", "Multiple pot sizes", "Gas/electric heating", "Temperature uniformity"]
    },
    {
      id: 4,
      title: "Rotary Hearth Furnaces",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Advanced rotary hearth technology for specialized heat treatment processes.",
      features: ["Rotary hearth design", "Precise temperature control", "Low maintenance", "High efficiency"]
    },
    {
      id: 5,
      title: "Box Furnaces",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Compact box furnaces for laboratory and small-scale industrial applications.",
      features: ["Compact design", "Easy installation", "Programmable controls", "Uniform temperature"]
    },
    {
      id: 6,
      title: "Bell Furnaces",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Bell-type furnaces for annealing and heat treatment of large components.",
      features: ["Large capacity", "Protective atmosphere", "Slow cooling", "High temperature"]
    },
    {
      id: 7,
      title: "Car Bottom Furnaces",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Heavy-duty car bottom furnaces for large workpieces and batch processing.",
      features: ["Heavy load capacity", "Car bottom loading", "High temperature", "Industrial scale"]
    },
    {
      id: 8,
      title: "Induction Furnaces",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Energy-efficient induction furnaces for melting and heating applications.",
      features: ["Fast heating", "Energy efficient", "Clean operation", "Precise control"]
    }
  ];

  return (
    <div className="container mt-5" style={{ minHeight: "100vh", paddingTop: "8rem" }}>
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-danger mb-3">Furnace Services</h1>
          <p className="lead text-muted">
            Comprehensive furnace manufacturing and maintenance services for industrial applications
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
              <h3 className="card-title text-center mb-3">Expert Furnace Solutions</h3>
              <p className="card-text">
                Singh Engineering Works specializes in designing, manufacturing, and maintaining high-quality industrial furnaces.
                Our furnaces are engineered for optimal performance, energy efficiency, and reliability across various industrial applications.
                We provide complete solutions from concept to commissioning, including installation, training, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Furnace Types Grid */}
      <div className="row g-4 mb-5">
        {furnaceTypes.map((furnace) => (
          <div key={furnace.id} className="col-lg-4 col-xl-3 col-md-6">
            <div className="card h-100 shadow-sm hover-card">
              <div className="card-img-container" style={{ height: "200px", overflow: "hidden" }}>
                <Image
                  src={furnace.image}
                  alt={furnace.title}
                  width={400}
                  height={200}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  className="card-img-top"
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-danger fw-bold">{furnace.title}</h5>
                <p className="card-text text-muted mb-3">{furnace.description}</p>
                <div className="features mb-3">
                  <h6 className="text-dark">Key Features:</h6>
                  <ul className="list-unstyled">
                    {furnace.features.map((feature, index) => (
                      <li key={index} className="mb-1">
                        <i className="fas fa-check text-success me-2"></i>
                        <small>{feature}</small>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-outline-danger btn-sm mt-auto">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Services Offered */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Our Furnace Services</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <i className="fas fa-tools fa-3x text-danger mb-3"></i>
                <h5>Design & Engineering</h5>
                <p className="text-muted">Custom furnace design based on your specific requirements</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <i className="fas fa-cogs fa-3x text-danger mb-3"></i>
                <h5>Manufacturing</h5>
                <p className="text-muted">Precision manufacturing using high-quality materials</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <i className="fas fa-wrench fa-3x text-danger mb-3"></i>
                <h5>Installation</h5>
                <p className="text-muted">Professional installation and commissioning services</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <i className="fas fa-shield-alt fa-3x text-danger mb-3"></i>
                <h5>Maintenance</h5>
                <p className="text-muted">Regular maintenance and repair services</p>
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
              <h3 className="card-title mb-3">Need a Custom Furnace Solution?</h3>
              <p className="card-text mb-3">
                Contact our experts to discuss your specific furnace requirements
              </p>
              <Link href="/contact" className="btn btn-light btn-lg">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furnace;