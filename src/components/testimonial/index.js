import Link from "next/link";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section class="testimonial-section home3-style">
      <div class="bg bg-pattern-5"></div>
      <div class="auto-container">
        <div class="row">
          <div class="title-column mb-md-40 col-xl-5 col-lg-4 col-md-12">
            <div class="sec-title mb-40">
              <span class="sub-title">TESTIMONIALS</span>
              <h2 class="text-split">What our customers have to say</h2>
            </div>
            <div class="info-box">
              <i class="icon flaticon-oldkare-love"></i>
              <div class="text">
                We’re trusted by more then
                <br class="d-none d-sm-block" />
                2350 satisfied & happy customers
              </div>
            </div>
          </div>
          <div class="testimonial-column col-xl-7 col-lg-8 col-md-12">
            <div class="carousel-outer">
              <div class="testimonial-carousel owl-carousel owl-theme default-navs">
                {/* <!-- Testimonial Block --> */}
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image">
                        <img src="images/resource/testi-1.jpg" alt="" />
                      </figure>
                      <div class="info-box">
                        <h4 class="name">Alex Martin</h4>
                        <span class="designation">Founder</span>
                      </div>
                      <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="text">
                      Fames dapibus vulputate porttitor luctus habitasse mattis
                      viverra penatibus ornare, mauris cubilia aenean tempor
                      lacus varius sodales at quam maecenas sapien
                    </div>
                  </div>
                </div>

                {/* <!-- Testimonial Block --> */}
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image">
                        <img src="images/resource/testi-2.jpg" alt="" />
                      </figure>
                      <div class="info-box">
                        <h4 class="name">Kevin Martin</h4>
                        <span class="designation">CO Founder</span>
                      </div>
                      <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="text">
                      Fames dapibus vulputate porttitor luctus habitasse mattis
                      viverra penatibus ornare, mauris cubilia aenean tempor
                      lacus varius sodales at quam maecenas sapien
                    </div>
                  </div>
                </div>

                {/* <!-- Testimonial Block --> */}
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image">
                        <img src="images/resource/testi-3.jpg" alt="" />
                      </figure>
                      <div class="info-box">
                        <h4 class="name">Sarah Albert</h4>
                        <span class="designation">Worker</span>
                      </div>
                      <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="text">
                      Fames dapibus vulputate porttitor luctus habitasse mattis
                      viverra penatibus ornare, mauris cubilia aenean tempor
                      lacus varius sodales at quam maecenas sapien
                    </div>
                  </div>
                </div>

                {/* <!-- Testimonial Block --> */}
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image">
                        <img src="images/resource/testi-1.jpg" alt="" />
                      </figure>
                      <div class="info-box">
                        <h4 class="name">Mark hardson</h4>
                        <span class="designation">Manager</span>
                      </div>
                      <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="text">
                      Fames dapibus vulputate porttitor luctus habitasse mattis
                      viverra penatibus ornare, mauris cubilia aenean tempor
                      lacus varius sodales at quam maecenas sapien
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
