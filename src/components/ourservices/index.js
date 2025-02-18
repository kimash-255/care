import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <section class="services-section-two">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">Our Service</span>
          <h2 class="text-split">
            We're committed to deliver the
            <br class="d-none d-md-block" />
            high quality service
          </h2>
        </div>
        <div class="row">
          {/* <!-- Service Block --> */}
          <div class="service-block-two col-lg-3 col-md-6 wow fadeInUp">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <img src="images/resource/service3-1.jpg" alt="" />
                </figure>
              </div>
              <div class="content-box">
                <i class="icon flaticon-oldkare-house"></i>
                <h5 class="title">
                  Elderly <br />
                  Nutrition
                </h5>
              </div>
              <div class="hover-content">
                <i class="icon flaticon-oldkare-house"></i>
                <h5 class="title">
                  <a href="page-service-details.html">
                    Elderly <br />
                    Nutrition
                  </a>
                </h5>
                <div class="text">
                  Lorem ipsum dolor sit amet conse ctetur adipi scing
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Service Block --> */}
          <div class="service-block-two col-lg-3 col-md-6 wow fadeInUp">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <img src="images/resource/service3-2.jpg" alt="" />
                </figure>
              </div>
              <div class="content-box">
                <i class="icon flaticon-oldkare-optometry"></i>
                <h5 class="title">
                  Elderly Care <br />
                  Service
                </h5>
              </div>
              <div class="hover-content">
                <i class="icon flaticon-oldkare-optometry"></i>
                <h5 class="title">
                  <a href="page-service-details.html">
                    Elderly Care <br />
                    Service
                  </a>
                </h5>
                <div class="text">
                  Lorem ipsum dolor sit amet conse ctetur adipi scing
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Service Block --> */}
          <div class="service-block-two col-lg-3 col-md-6 wow fadeInUp">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <img src="images/resource/service3-3.jpg" alt="" />
                </figure>
              </div>
              <div class="content-box">
                <i class="icon flaticon-oldkare-playing-cards"></i>
                <h5 class="title">
                  Relaxations <br />
                  Activities
                </h5>
              </div>
              <div class="hover-content">
                <i class="icon flaticon-oldkare-playing-cards"></i>
                <h5 class="title">
                  <a href="page-service-details.html">
                    Relaxations <br />
                    Activities
                  </a>
                </h5>
                <div class="text">
                  Lorem ipsum dolor sit amet conse ctetur adipi scing
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Service Block --> */}
          <div class="service-block-two col-lg-3 col-md-6 wow fadeInUp">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <img src="images/resource/service3-4.jpg" alt="" />
                </figure>
              </div>
              <div class="content-box">
                <i class="icon flaticon-oldkare-park"></i>
                <h5 class="title">
                  Assisted <br />
                  Living
                </h5>
              </div>
              <div class="hover-content">
                <i class="icon flaticon-oldkare-park"></i>
                <h5 class="title">
                  <a href="page-service-details.html">
                    Assisted <br />
                    Living
                  </a>
                </h5>
                <div class="text">
                  Lorem ipsum dolor sit amet conse ctetur adipi scing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurServices;
