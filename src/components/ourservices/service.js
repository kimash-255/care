import Link from "next/link";
import Image from "next/image";

const Service = () => {
  return (
    <section class="services-section">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">Services we’re offering</span>
          <h2>
            High quality products and services
            <br /> that we stand behind
          </h2>
        </div>
        <div class="row">
          {/* <!-- Service Block --> */}
          <div class="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <Link href="page-service-details.html">
                    <img src="images/resource/service-1.jpg" alt="" />
                  </Link>
                </figure>
                <div class="icon-box">
                  <i class="icon flaticon-oldkare-chat"></i>
                </div>
              </div>
              <div class="content-box">
                <h5 class="title">
                  <Link href="page-service-details.html">Medical Checkup</Link>
                </h5>
                <div class="text">
                  consetetur sadipscing elitr the sed arer diam nonumy eirmod
                  tempor
                </div>
                <Link href="page-service-details.html" class="read-more">
                  read More <i class="fa fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Service Block --> */}
          <div
            class="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <Link href="page-service-details.html">
                    <img src="images/resource/service-2.jpg" alt="" />
                  </Link>
                </figure>
                <div class="icon-box">
                  <i class="icon flaticon-oldkare-healthcare"></i>
                </div>
              </div>
              <div class="content-box">
                <h5 class="title">
                  <Link href="page-service-details.html">Senior Citizen </Link>
                </h5>
                <div class="text">
                  consetetur sadipscing elitr the sed arer diam nonumy eirmod
                  tempor
                </div>
                <Link href="page-service-details.html" class="read-more">
                  read More <i class="fa fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Service Block --> */}
          <div
            class="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <Link href="page-service-details.html">
                    <img src="images/resource/service-3.jpg" alt="" />
                  </Link>
                </figure>
                <div class="icon-box">
                  <i class="icon flaticon-oldkare-gardening"></i>
                </div>
              </div>
              <div class="content-box">
                <h5 class="title">
                  <Link href="page-service-details.html">Health & Medical Care</Link>
                </h5>
                <div class="text">
                  consetetur sadipscing elitr the sed arer diam nonumy eirmod
                  tempor
                </div>
                <Link href="/services" class="read-more">
                  read More <i class="fa fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-40 wow fadeInUp">
          <div class="col-lg-8">
            <div class="bottom-text d-flex align-items-center justify-content-between">
              <p class="mb-0">
                Find The Main Senior Care Service
                <span class="color3 ps-2">Send a request now</span>
              </p>
              <Link href="/contact" class="theme-btn btn-style-two small">
                <span class="btn-title">Discover More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
