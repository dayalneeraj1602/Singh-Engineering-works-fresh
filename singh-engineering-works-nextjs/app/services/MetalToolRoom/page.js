'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

const MetalToolRoom = () => {
  const services = [
    {
      id: 1,
      title: "Precision Machining",
      image: "https://www.bosch-pt.co.in/binary/ocsmedia/optimized/full/o396235v117_gws_800_appl_05_T6.jpg",
      description: "High-precision machining services for metal components with tight tolerances.",
      features: ["CNC machining", "±0.01mm accuracy", "Various metals", "Quality inspection"]
    },
    {
      id: 2,
      title: "Metal Fabrication",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Complete metal fabrication services from design to finished product.",
      features: ["Welding", "Cutting", "Bending", "Assembly"]
    },
    {
      id: 3,
      title: "Surface Treatment",
      image: "https://haryanarubberudyog.com/wp-content/uploads/2020/02/cnc-turning.jpg",
      description: "Advanced surface treatment processes for enhanced durability and performance.",
      features: ["Heat treatment", "Surface hardening", "Coating", "Polishing"]
    },
    {
      id: 4,
      title: "Quality Inspection",
      image: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      description: "Comprehensive quality control and inspection services.",
      features: ["Dimensional inspection", "Material testing", "Non-destructive testing", "Documentation"]
    }
  ];

  const capabilities = [
    "CNC Milling & Turning",
    "Wire EDM",
    "Surface Grinding",
    "Cylindrical Grinding",
    "Heat Treatment",
    "Welding (MIG/TIG)",
    "Sheet Metal Work",
    "Precision Assembly"
  ];

  return (
    <div className="container mt-5" style={{ minHeight: "100vh", paddingTop: "8rem" }}>
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-danger mb-3">Metal Tool Room Services</h1>
          <p className="lead text-muted">
            Precision engineering and metalworking services for industrial applications
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
              <h3 className="card-title text-center mb-3">Advanced Metalworking Solutions</h3>
              <p className="card-text">
                Our state-of-the-art metal tool room is equipped with the latest CNC machinery and traditional tooling equipment.
                We specialize in precision machining, fabrication, and surface treatment services that meet the highest industry standards.
                With over 25 years of experience, we deliver reliable solutions for complex metalworking requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="row g-4 mb-5">
        {services.map((service) => (
          <div key={service.id} className="col-lg-6 col-xl-3">
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
                <div className="features mb-3">
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

      {/* Capabilities */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Our Capabilities</h3>
              <div className="row g-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-cog text-danger me-3"></i>
                      <span>{capability}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Our Equipment</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-robot fa-3x text-danger mb-3"></i>
                  <h5>CNC Machines</h5>
                  <p className="text-muted">Latest CNC milling and turning centers</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-tools fa-3x text-danger mb-3"></i>
                  <h5>Conventional Tools</h5>
                  <p className="text-muted">Precision lathes and milling machines</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-flask fa-3x text-danger mb-3"></i>
                  <h5>Quality Lab</h5>
                  <p className="text-muted">Advanced testing and inspection equipment</p>
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
              <h3 className="card-title mb-3">Ready to Start Your Project?</h3>
              <p className="card-text mb-3">
                Contact us for a consultation on your metalworking requirements
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

export default MetalToolRoom;