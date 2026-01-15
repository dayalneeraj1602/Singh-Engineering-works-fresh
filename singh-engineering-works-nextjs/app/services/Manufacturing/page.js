'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Manufacturing = () => {
  const manufacturingServices = [
    {
      id: 1,
      title: "Ceramic Tube Manufacturing",
      image: "https://www.betterceramic.com/wp-content/uploads/2020/05/Alumina-ceramic-tube-and-rod-5.jpg",
      description: "High-quality ceramic tubes and rods for high-temperature applications.",
      features: ["Alumina ceramics", "Custom dimensions", "High temperature resistance", "Precision machining"]
    },
    {
      id: 2,
      title: "Thermocouple Production",
      image: "https://www.processparameters.co.uk/wp-content/uploads/2019/07/explaining-how-does-a-thermocouple-work.jpg",
      description: "Precision thermocouples for accurate temperature measurement.",
      features: ["Type K/J/R/S", "Custom configurations", "High accuracy", "Industrial grade"]
    },
    {
      id: 3,
      title: "Ceramic Roller Manufacturing",
      image: "https://image.made-in-china.com/2f0j00KwUiuAphhfqQ/High-Electrical-Insulating-Iroperties-Alumina-Tube-Ceramic-Pipe-Ceramic-Rollers-for-Glass-Tempering-Furnace-Kiln.jpg",
      description: "Specialized ceramic rollers for glass tempering and processing.",
      features: ["High alumina content", "Wear resistance", "Temperature stability", "Custom sizes"]
    },
    {
      id: 4,
      title: "Fiber Products",
      image: "https://2.imimg.com/data2/JK/KJ/MY-/anchors-for-ceramic-fibre-l-1000x1000.jpg",
      description: "Ceramic fiber products for thermal insulation applications.",
      features: ["High temperature insulation", "Low thermal conductivity", "Custom shapes", "Easy installation"]
    },
    {
      id: 5,
      title: "Fiber Blanket Production",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Ceramic fiber blankets for industrial insulation needs.",
      features: ["Flexible installation", "High temperature rating", "Low heat storage", "Cost effective"]
    },
    {
      id: 6,
      title: "Module Anchors",
      image: "https://file2.okorder.com/prodalbum/2014/12/16/e9eec9f3c22d628862540d9bf62f76bd.jpg",
      description: "Stainless steel anchors for ceramic fiber modules.",
      features: ["SS 304/310 grade", "Corrosion resistance", "High strength", "Custom designs"]
    }
  ];

  const processes = [
    {
      title: "Design & Engineering",
      icon: "fas fa-drafting-compass",
      description: "Custom product design and engineering solutions"
    },
    {
      title: "Material Selection",
      icon: "fas fa-flask",
      description: "Careful selection of materials for optimal performance"
    },
    {
      title: "Precision Manufacturing",
      icon: "fas fa-cogs",
      description: "State-of-the-art manufacturing processes"
    },
    {
      title: "Quality Control",
      icon: "fas fa-check-circle",
      description: "Rigorous testing and quality assurance"
    },
    {
      title: "Packaging & Delivery",
      icon: "fas fa-box",
      description: "Safe packaging and timely delivery"
    }
  ];

  return (
    <div className="container mt-5" style={{ minHeight: "100vh", paddingTop: "8rem" }}>
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-danger mb-3">Manufacturing Services</h1>
          <p className="lead text-muted">
            Advanced manufacturing solutions for industrial components and materials
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
              <h3 className="card-title text-center mb-3">Excellence in Manufacturing</h3>
              <p className="card-text">
                Singh Engineering Works offers comprehensive manufacturing services specializing in high-temperature
                industrial components. Our manufacturing facility is equipped with advanced machinery and processes
                to produce ceramic products, thermocouples, fiber materials, and custom-engineered solutions that meet
                the demanding requirements of modern industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Services Grid */}
      <div className="row g-4 mb-5">
        {manufacturingServices.map((service) => (
          <div key={service.id} className="col-lg-6 col-xl-4">
            <div className="card h-100 shadow-sm hover-card">
              <div className="card-img-container" style={{ height: "200px", overflow: "hidden" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={200}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  className="card-img-top"
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-danger fw-bold">{service.title}</h5>
                <p className="card-text text-muted mb-3">{service.description}</p>
                <div className="features">
                  <ul className="list-unstyled">
                    {service.features.map((feature, index) => (
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

      {/* Manufacturing Process */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Our Manufacturing Process</h2>
          <div className="row g-4">
            {processes.map((process, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card text-center border-0 shadow-sm h-100">
                  <div className="card-body">
                    <div className="process-number mb-3">
                      <span className="badge bg-danger fs-4">{index + 1}</span>
                    </div>
                    <i className={`${process.icon} fa-2x text-danger mb-3`}></i>
                    <h5 className="card-title">{process.title}</h5>
                    <p className="card-text text-muted">{process.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Materials & Technologies */}
      <div className="row mb-5">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Materials We Work With</h3>
              <div className="row g-3">
                <div className="col-6">
                  <div className="text-center">
                    <i className="fas fa-circle text-info mb-2"></i>
                    <p className="mb-0">Alumina Ceramics</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <i className="fas fa-circle text-warning mb-2"></i>
                    <p className="mb-0">Stainless Steel</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <i className="fas fa-circle text-danger mb-2"></i>
                    <p className="mb-0">Ceramic Fibers</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <i className="fas fa-circle text-success mb-2"></i>
                    <p className="mb-0">High-Temp Alloys</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Technologies Used</h3>
              <div className="row g-3">
                <div className="col-6">
                  <div className="text-center">
                    <i className="fas fa-microchip text-primary mb-2"></i>
                    <p className="mb-0">CNC Machining</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <i className="fas fa-fire text-danger mb-2"></i>
                    <p className="mb-0">Heat Treatment</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <i className="fas fa-search text-info mb-2"></i>
                    <p className="mb-0">Quality Testing</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <i className="fas fa-tools text-warning mb-2"></i>
                    <p className="mb-0">Precision Tools</p>
                  </div>
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
              <h3 className="card-title mb-3">Custom Manufacturing Solutions</h3>
              <p className="card-text mb-3">
                Tell us about your manufacturing requirements and get a custom quote
              </p>
              <Link href="/contact" className="btn btn-light btn-lg">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;