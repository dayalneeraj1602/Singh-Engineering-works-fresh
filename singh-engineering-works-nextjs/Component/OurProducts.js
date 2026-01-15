'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurProducts = () => {
  const data = [
    {
      id: 1,
      img: "https://keramo.in/upload/p/SHUTTLE%20KILN.jpg",
      title: "Shuttle Klin Furnaces",
      price: "Rs 5 Lakhs / Unit",
      material: "Melting Material: Copper, Brass, Aluminum",
      power: "Power Source: Electric/Gas",
      type: "Type Of Furnace: Batch",
      temp: "Max Temperature: 500-1400°C",
      capacity: "Capacity: 100-5000 kg",
      automation: "Automation Grade: Semi-Automatic"
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/PR/IJ/OS/SELLER-36709685/roller-hearth-furnace-500x500.jpg",
      title: "Roller Furnace",
      price: "Rs 8 Lakhs / Unit",
      material: "Melting Material: Steel, Iron",
      power: "Power Source: Gas/Electric",
      type: "Type Of Furnace: Continuous",
      temp: "Max Temperature: 1200°C",
      capacity: "Capacity: 500-10000 kg/hr",
      automation: "Automation Grade: Automatic"
    },
    {
      id: 3,
      img: "https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg",
      title: "Pit Pot Furnace",
      price: "Rs 6 Lakhs / Unit",
      material: "Melting Material: Aluminum, Zinc",
      power: "Power Source: Electric",
      type: "Type Of Furnace: Batch",
      temp: "Max Temperature: 800°C",
      capacity: "Capacity: 200-2000 kg",
      automation: "Automation Grade: Manual/Semi-Automatic"
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      title: "Rotary Hearth Furnace",
      price: "Rs 10 Lakhs / Unit",
      material: "Melting Material: Iron, Steel",
      power: "Power Source: Electric/Gas",
      type: "Type Of Furnace: Rotary",
      temp: "Max Temperature: 1000°C",
      capacity: "Capacity: 1000-5000 kg",
      automation: "Automation Grade: Automatic"
    },
    {
      id: 5,
      img: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      title: "Box Furnace",
      price: "Rs 3 Lakhs / Unit",
      material: "Melting Material: Various Metals",
      power: "Power Source: Electric",
      type: "Type Of Furnace: Batch",
      temp: "Max Temperature: 600-1200°C",
      capacity: "Capacity: 50-500 kg",
      automation: "Automation Grade: Semi-Automatic"
    },
    {
      id: 6,
      img: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      title: "Induction Furnace",
      price: "Rs 12 Lakhs / Unit",
      material: "Melting Material: Steel, Iron, Copper",
      power: "Power Source: Electric",
      type: "Type Of Furnace: Induction",
      temp: "Max Temperature: 1600°C",
      capacity: "Capacity: 500-5000 kg",
      automation: "Automation Grade: Automatic"
    }
  ];

  return (
    <div className="my-5 carousel">
      <div className="section-head col-sm-12">
        <h4>
          <span>Our</span> Products
        </h4>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card product-card h-100 shadow-sm" style={{ borderRadius: "12px", overflow: "hidden" }}>
              <Link
                href="/products"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="text-decoration-none"
              >
                <div className="card-img-container" style={{ height: "200px", overflow: "hidden" }}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={200}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-dark fw-bold mb-2">{item.title}</h6>
                  <p className="card-text text-danger fw-bold mb-2">{item.price}</p>
                  <div className="specs mb-3">
                    <small className="text-muted d-block">{item.material}</small>
                    <small className="text-muted d-block">{item.power}</small>
                    <small className="text-muted d-block">{item.type}</small>
                    <small className="text-muted d-block">{item.temp}</small>
                    <small className="text-muted d-block">{item.capacity}</small>
                    <small className="text-muted d-block">{item.automation}</small>
                  </div>
                  <button className="btn btn-outline-primary btn-sm mt-auto">
                    View Details
                  </button>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurProducts;