'use client'

import Image from "next/image";

const Gallery = () => {
  const images = [
    "https://keramo.in/upload/p/SHUTTLE%20KILN.jpg",
    "https://5.imimg.com/data5/PR/IJ/OS/SELLER-36709685/roller-hearth-furnace-500x500.jpg",
    "https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/6/312078/rotary-hearth-furnace-500x500.jpeg",
    "https://www.bosch-pt.co.in/binary/ocsmedia/optimized/full/o396235v117_gws_800_appl_05_T6.jpg",
    "https://haryanarubberudyog.com/wp-content/uploads/2020/02/cnc-turning.jpg",
  ];

  return (
    <div className="container" style={{ marginTop: "8.5rem" }}>
      <h2 className="text-center mb-4">Our Gallery</h2>
      <div className="row">
        {images.map((img, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;