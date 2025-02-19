import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const WhyChooseUs = () => {
  useEffect(() => {
    // Animate Progress Bars
    const progressBars = document.querySelectorAll(".progress-line");
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    });
  }, []);

  return (
    <section className="why-choose-us-two pt-0">
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div
            className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay="600ms"
          >
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Why Warm Touch Homes?</span>
                <h2 className="text-split">
                  Exceptional Care with a Personal Touch
                </h2>
                <div className="text">
                  At Warm Touch Homes, we believe in creating a **safe, loving,
                  and enriching environment** where seniors can thrive. Our
                  holistic approach to senior living ensures **comfort, dignity,
                  and joy** for every resident.
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="info-box">
                    <i className="icon fa fa-check-circle"></i>
                    <h6 className="title">24/7 Compassionate Care</h6>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="info-box">
                    <i className="icon fa fa-check-circle"></i>
                    <h6 className="title">Personalized Wellness Plans</h6>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="skills">
                {/* Skill Item - Medical Care */}
                <div className="skill-item">
                  <div className="skill-header">
                    <h6 className="skill-title">Comprehensive Medical Care</h6>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="95">
                        <div className="skill-percentage">
                          <span className="count-text">95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Item - Independent Living */}
                <div className="skill-item">
                  <div className="skill-header">
                    <h6 className="skill-title">Promoting Independence</h6>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="88">
                        <div className="skill-percentage">
                          <span className="count-text">88%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
            <div className="image-box wow fadeInRight">
              <figure className="image overlay-anim">
                <Image
                  src="/images/resource/why-us-3.jpg"
                  alt="Warm Touch Homes"
                  width={500}
                  height={500}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
