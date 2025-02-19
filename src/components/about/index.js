import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-section-three">
      <div className="auto-container">
        <div className="row">
          <div
            className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
            data-wow-delay="600ms"
          >
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">About Warm Touch Homes</span>
                <h2 className="text-split">
                  Creating a warm and caring environment for seniors
                </h2>
                <div className="text">
                  At Warm Touch Homes, we are dedicated to enhancing the lives
                  of seniors by providing compassionate, high-quality care in a
                  comfortable and supportive setting. Our goal is to create a
                  community where seniors feel valued, engaged, and well cared
                  for. With personalized services and a family-like atmosphere,
                  we ensure that every resident enjoys their golden years with
                  dignity and joy.
                </div>
              </div>

              <ul className="list-style-home3">
                <li>Personalized Care Plans</li>
                <li>Wellness & Nutrition Programs</li>
                <li>Engaging Social Activities</li>
                <li>On-Site Medical Support</li>
                <li>Compassionate and Skilled Caregivers</li>
                <li>A Safe & Comfortable Living Environment</li>
              </ul>

              <div className="btn-box d-sm-flex align-items-center">
                <Link
                  href="/about"
                  className="theme-btn btn-style-one mb-3 mb-sm-0"
                >
                  <span className="btn-title">Discover More</span>
                </Link>
                <div className="founder-info d-flex align-items-center ml-50 ml-sm--0">
                  <div className="thumb mr-20">
                    <Image
                      className="rounded-circle"
                      src="/images/resource/thumb-1.jpg"
                      alt="Founder"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <h6 className="name mb-0">Jessica Brown</h6>
                    <span className="designation">
                      Founder of Warm Touch Homes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Image Column --> */}
          <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image-1 overlay-anim wow fadeInUp">
                <Image
                  src="/images/resource/about3-1.jpg"
                  alt="Warm Touch Homes"
                  width={400}
                  height={300}
                />
              </figure>
              <figure className="image-2 overlay-anim wow fadeInRight">
                <Image
                  src="/images/resource/about3-2.jpg"
                  alt="Caring for Seniors"
                  width={400}
                  height={300}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
