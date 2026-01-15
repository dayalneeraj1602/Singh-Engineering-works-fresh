'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import OurProducts from "../Component/OurProducts";
import WhyUs from "../Component/WhyUs";
import OurServices from "../Component/OurServices";
import AOSInit from "../Component/AOSInit";

export const info = ` Est. 2001, Singh Engineering Works in Noida crafts quality
Industrial Furnaces. As a Sole Proprietorship, we prioritize
standards, offering competitive rates. Led by Prabhudayal Singh,
we've secured a strong market position.`;

const Home = () => {
  const [infoText, setInfoText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setInfoText((prevText) => {
        if (prevText.length < info.length) {
          return prevText + info[prevText.length];
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <AOSInit />
      <section className="banner">
        <div className="overlay"></div>

        <div className="punch-line">
          <h1 className="headline">Innovating Furnaces</h1>
          <h1 className="headline since">Since 2001.</h1>

          <p className="info text-start">{infoText}</p>

          <div className="Explore">
            <Link
              href="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="btn fs-5 btn-outline-light">Explore</button>
            </Link>
          </div>
        </div>
      </section>

      {/* -----------Sections below hero--------- */}
      <OurProducts />
      <WhyUs />
      <OurServices />
    </div>
  );
};

export default Home;