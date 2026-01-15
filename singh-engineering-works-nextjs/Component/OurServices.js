'use client'

import React, { useState } from "react";
import Link from "next/link";

const OurServices = () => {
  const [hover, setHover] = useState(null);

  const dataInfo = [
    {
      id: 1,
      imgUrl: "https://keramo.in/upload/p/SHUTTLE%20KILN.jpg",
      productTitle: "Furnace",
      ProductDescription: "High-temperature heating device used in industrial processes for material processing.",
      link: "/services/furnace",
      icon: "fas fa-fire",
    },
    {
      id: 2,
      imgUrl: "https://www.bosch-pt.co.in/binary/ocsmedia/optimized/full/o396235v117_gws_800_appl_05_T6.jpg",
      productTitle: "Metal Tool Room",
      ProductDescription: "Specialized metal tool room offering high-temperature heating solutions for industrial processes, ensuring precision and efficiency in material processing.",
      link: "/services/MetalToolRoom",
      icon: "fas fa-tools",
    },
    {
      id: 3,
      imgUrl: "https://haryanarubberudyog.com/wp-content/uploads/2020/02/cnc-turning.jpg",
      productTitle: "Manufacturing",
      ProductDescription: "Comprehensive manufacturing services integrating cutting-edge technology to meet the diverse needs of industrial processes and material processing.",
      link: "/services/Manufacturing",
      icon: "fas fa-industry",
    },
    {
      id: 4,
      imgUrl: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      productTitle: "Furnace Parts",
      ProductDescription: "High-quality furnace parts designed to enhance the performance and longevity of industrial heating systems, supporting seamless material processing.",
      link: "/services/FurnaceParts",
      icon: "fas fa-cogs",
    },
  ];

  return (
    <div>
      <section className="services section-bg" id="services">
        <div className="container">
          <div className="section-head col-sm-12">
            <h4>
              <span>Our</span> Services
            </h4>
            <p>
              We are committed to providing our clients with the best services.
            </p>
          </div>

          <div className="row">
            {dataInfo?.map((item, index) => (
              <div
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index + 1 * 100}
                key={item.id}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
              >
                <Link
                  href={item.link}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    className="service-card"
                    style={{
                      background: hover === item.id ? "#f91942" : "#fff",
                      color: hover === item.id ? "white" : "black",
                      height: "100%",
                      padding: "20px",
                      borderRadius: "10px",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div className="service-icon mb-3">
                      <i className={item.icon} style={{ fontSize: "2rem", color: hover === item.id ? "white" : "#f91942" }}></i>
                    </div>
                    <img
                      src={item.imgUrl}
                      alt={item.productTitle}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "15px",
                      }}
                    />
                    <h4
                      style={{
                        color: hover === item.id ? "white" : "#f91942",
                        marginBottom: "10px",
                      }}
                    >
                      {item.productTitle}
                    </h4>
                    <p
                      style={{
                        color: hover === item.id ? "white" : "#818181",
                        fontSize: "14px",
                      }}
                    >
                      {item.ProductDescription}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;