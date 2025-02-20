"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <section
      className="page-title"
      style={{
        position: "relative",
        backgroundImage:
          "url('/images/main-slider/elderly-senior-with-caregiver.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: 1,
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontSize: "2.5rem",
            margin: "0 0 10px",
            animation: "fadeIn 1s ease-in-out",
            color: "white",
          }}
        >
          WARM TOUCH HOMES
        </h1>
        <span
          style={{
            display: "block",
            fontSize: "1.25rem",
            marginBottom: "20px",
            animation: "fadeIn 1.5s ease-in-out",
            color: "white",
          }}
        >
          Where Care and Comfort Meet Together
        </span>
        <div className="btn-box animate-2">
          <Link
            href="/about"
            className="theme-btn btn-style-one hover-light text-black"
          >
            <span className="btn-title">Read More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
