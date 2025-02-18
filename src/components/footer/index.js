import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(./images/background/bg-1.png)" }}
      ></div>

      {/* Upper Box */}
      <div className="auto-container">
        <div className="upper-box">
          <div className="row">
            <div className="contact-info logo-box col-lg-4 wow fadeInUp text-center">
              <div className="logo">
                <a href="#">
                  <img src="/images/logo.png" alt="" />
                </a>
              </div>
            </div>

            <div className="contact-info col-lg-4 wow fadeInRight">
              <div className="inner-box">
                <h4 className="title">Send Email</h4>
                <div className="text">
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
              </div>
            </div>

            <div
              className="contact-info col-lg-4 wow fadeInLeft"
              data-wow-delay="600ms"
            >
              <div className="inner-box">
                <h4 className="title">call now</h4>
                <div className="text">
                  <a href="tel:+924680668800">+ 92 ( 4680 ) 66 - 8800</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widgets Section */}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            <div className="footer-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-xl-7 col-lg-6 col-md-6">
                  <div className="footer-widget about-widget">
                    <h6 className="widget-title">About</h6>
                    <div className="text">
                      Welcome to our web design agency. Lorem ipsum simply free
                      text dolor sited amet cons cing elit.
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Explore</h6>
                    <ul className="user-links">
                      <li>
                        <a href="#">Meet Our Team</a>
                      </li>
                      <li>
                        <a href="#">What We Do</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget contacts-widget">
                <h6 className="widget-title">Contact</h6>
                <div className="text">
                  60 Road, Broklyn Golden Street New York. USA
                </div>
                <ul className="social-icon-two">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget">
                <h6 className="widget-title">Newsletter</h6>
                <div className="widget-content">
                  <div className="subscribe-form">
                    <div className="text">
                      Subscribe for our upcoming latest articles and news
                      resources
                    </div>
                    <form method="post" action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="email"
                          value=""
                          placeholder="Email Address"
                          required
                        />
                        <button type="button" className="theme-btn">
                          <span className="btn-title">
                            <i className="fa fa-paper-plane"></i>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              <p>
                &copy; Copyright reserved by
                <a href="index.html">kodesolution.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
