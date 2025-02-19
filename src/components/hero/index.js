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
        {/* Slide Item */}
        <SwiperSlide>
          <div className="slide-item relative">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/images/main-slider/3.jpg"
                alt="Warm Touch Homes Banner"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="auto-container text-center">
              <div className="content-box">
                <h1 className="title animate-1 ">WARM TOUCH HOMES</h1>
                <span className="sub-title animate-1 ">
                  Where Care and Comfort Meet Together
                </span>
                <div className="btn-box animate-2 justify-center">
                  <Link
                    href="/page-about"
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
    </section>
  );
};

export default Hero;
