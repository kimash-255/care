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
                  Adult foster home is a wonderful option for seniors who need
                  assistance with daily activities like managing medications,
                  dressing, bathing, housekeeping and meals. We also often have
                  programs and team members in place who can provide support
                  with recreational activities and transportation. It's a
                  redefined independence that gives you more time to pursue your
                  hobbies, enjoy fun social events and make new friends. Our
                  Adult Foster Home has trained staff on-site 24 hours a day,
                  seven days a week, to be alerted to an emergency.
                </div>
              </div>

              <ul className="list-style-home3">
                <li>24/7 On-Site Trained Staff</li>
                <li>Medication Management</li>
                <li>Personal Care Assistance</li>
                <li>Housekeeping & Meals</li>
                <li>Recreational Activities</li>
                <li>Transportation Support</li>
              </ul>

              <div className="btn-box d-sm-flex align-items-center">
                <Link
                  href="/about"
                  className="theme-btn btn-style-one mb-3 mb-sm-0"
                >
                  <span className="btn-title">Discover More</span>
                </Link>
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
