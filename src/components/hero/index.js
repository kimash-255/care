import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section class="banner-section-three">
      <div class="banner-three-carousel owl-carousel owl-theme default-navs">
        {/* <!-- Slide Item --> */}
        <div class="slide-item">
          <div
            class="bg-image"
            style="background-image: url(images/main-slider/3.jpg)"
          ></div>
          <div class="auto-container">
            <div class="content-box text-center">
              <h1 class="title animate-1">HEALTH CARE</h1>
              <span class="sub-title animate-1">Lovegiver Professionals</span>
              <div class="btn-box animate-2 justify-content-center">
                <a
                  href="page-about.html"
                  class="theme-btn btn-style-one hover-light"
                >
                  <span class="btn-title">Read More</span>
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
