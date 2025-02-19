"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <section className="banner-section-three">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="banner-three-carousel"
      >
        <SwiperSlide>
          <div className="page-title slide-item">
            <div className="bg-image">
              <Image
                src="/images/main-slider/3.jpg"
                alt="Warm Touch Homes Banner"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  width: "100%",
                  height: "100%",
                }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  zIndex: 1,
                }}
              ></div>
            </div>
            <div className="auto-container text-center">
              <div className="content-box">
                <h1 className="sub-title animate-1">WARM TOUCH HOMES</h1>
                <span className="sub-title animate-1">
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
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .banner-section-three {
          position: relative;
          width: 100%;
          overflow: hidden;
          max-width: 100vw;
        }

        .slide-item {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
        }

        .bg-image {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4); /* Adjust opacity as needed */
          z-index: 1;
        }

        .content-box {
          position: relative;
          z-index: 2; /* Increased z-index to appear above overlay */
          padding: 120px 0;
        }

        .title {
          color: #ffffff; /* Ensure text is white */
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Optional text shadow */
        }

        .sub-title {
          color: #ffffff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .slide-item {
            height: 80vh;
            min-height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
