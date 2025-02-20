import Link from "next/link";
import Image from "next/image";

const Service = () => {
  return (
    <section className="services-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Services we’re offering</span>
          <h2>
            High quality products and services
            <br /> that we stand behind
          </h2>
        </div>
        <div className="row">
          {/* <!-- Service Block --> */}
          <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/services/elderly-nutrition">
                    <img
                      src="images/resource/service-1.jpg"
                      alt="Elderly Nutrition"
                    />
                  </Link>
                </figure>
                <div className="icon-box">
                  <i className="icon flaticon-oldkare-house"></i>
                </div>
              </div>
              <div className="content-box">
                <h5 className="title">
                  <Link href="/services/elderly-nutrition">
                    Elderly Nutrition
                  </Link>
                </h5>
                <div className="text">
                  Providing balanced meal plans tailored for seniors to maintain
                  a healthy lifestyle. Our nutrition services include customized
                  meal planning, dietary assessments, and guidance from
                  experienced nutritionists.
                </div>
                <Link href="/services/elderly-nutrition" className="read-more">
                  Read More <i className="fa fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Service Block --> */}
          <div
            className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/services/elderly-care-service">
                    <img
                      src="images/resource/service-2.jpg"
                      alt="Elderly Care Service"
                    />
                  </Link>
                </figure>
                <div className="icon-box">
                  <i className="icon flaticon-oldkare-optometry"></i>
                </div>
              </div>
              <div className="content-box">
                <h5 className="title">
                  <Link href="/services/elderly-care-service">
                    Elderly Care Service
                  </Link>
                </h5>
                <div className="text">
                  Comprehensive elderly care services to support daily living
                  and medical needs. Our dedicated caregivers provide assistance
                  with personal hygiene, medication management, mobility
                  support, and companionship.
                </div>
                <Link
                  href="/services/elderly-care-service"
                  className="read-more"
                >
                  Read More <i className="fa fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Service Block --> */}
          <div
            className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/services/relaxation-activities">
                    <img
                      src="images/resource/service-3.jpg"
                      alt="Relaxation Activities"
                    />
                  </Link>
                </figure>
                <div className="icon-box">
                  <i className="icon flaticon-oldkare-playing-cards"></i>
                </div>
              </div>
              <div className="content-box">
                <h5 className="title">
                  <Link href="/services/relaxation-activities">
                    Relaxation Activities
                  </Link>
                </h5>
                <div className="text">
                  Engaging relaxation activities to promote mental and physical
                  well-being. Our carefully designed relaxation programs include
                  guided meditation, gentle yoga, breathing exercises, and music
                  therapy.
                </div>
                <Link
                  href="/services/relaxation-activities"
                  className="read-more"
                >
                  Read More <i className="fa fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-40 wow fadeInUp">
          <div className="col-lg-8">
            <div className="bottom-text d-flex align-items-center justify-content-between">
              <p className="mb-0">
                Find The Main Senior Care Service
                <span className="color3 ps-2">Send a request now</span>
              </p>
              <Link href="/contact" className="theme-btn btn-style-two small">
                <span className="btn-title">Discover More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
