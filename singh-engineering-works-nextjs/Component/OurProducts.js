'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";

const OurProducts = () => {
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

  return (
    <div className="my-5 carousel">
      <div className="section-head col-sm-12">
        <h4>
          <span>Our</span> Products
        </h4>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1800,
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
            <div className="image-wrapper carousel-item">
              <Link
                href={`/product/${item.id}`}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="carousel-item-link"
                style={{ textDecoration: "none" }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                />

                <p className="opacity-25 mt-2">
                  <b>{item.title}</b>
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurProducts;