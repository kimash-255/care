import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section class="about-section-three">
      <div class="auto-container">
        <div class="row">
          <div
            class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
            data-wow-delay="600ms"
          >
            <div class="inner-column">
              <div class="sec-title">
                <span class="sub-title">About Our Company</span>
                <h2 class="text-split">We make a difference in senior lives</h2>
                <div class="text">
                  WeLorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua aute irure dolor in reprehenderit in voluptate velit
                  esse
                </div>
              </div>

              <ul class="list-style-home3">
                <li>In-House Theater</li>
                <li>Medication Management</li>
                <li>On-Site Physician Services</li>
                <li>Velit esse cillum dolore eu</li>
                <li>Duis aute dolor in volupte</li>
                <li>Refresing to get a personal</li>
              </ul>

              <div class="btn-box d-sm-flex align-items-center">
                <a
                  href="page-about.html"
                  class="theme-btn btn-style-one mb-3 mb-sm-0"
                >
                  <span class="btn-title">Discover more</span>
                </a>
                <div class="founder-info d-flex align-items-center ml-50 ml-sm--0">
                  <div class="thumb mr-20">
                    <img
                      class="rounded-circle"
                      src="images/resource/thumb-1.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 class="name mb-0">Jessica brown</h6>
                    <span class="designation">Founder of company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Image Column --> */}
          <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
            <div class="inner-column">
              <figure class="image-1 overlay-anim wow fadeInUp">
                <img src="images/resource/about3-1.jpg" alt="" />
              </figure>
              <figure class="image-2 overlay-anim wow fadeInRight">
                <img src="images/resource/about3-2.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
