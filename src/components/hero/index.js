import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="banner-section-three">
      <div className="banner-three-carousel owl-carousel owl-theme default-navs">
        {/* <!-- Slide Item --> */}
        <div className="slide-item">
          <div
            className="bg-image"
            style={{ backgroundImage: "url('/images/main-slider/3.jpg')" }}
          ></div>
          <div className="auto-container">
            <div className="content-box text-center">
              <h1 className="title animate-1">HEALTH CARE</h1>
              <span className="sub-title animate-1">
                Lovegiver Professionals
              </span>
              <div className="btn-box animate-2 justify-content-center">
                <a
                  href="page-about.html"
                  className="theme-btn btn-style-one hover-light"
                >
                  <span className="btn-title">Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
