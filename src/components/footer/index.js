import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* <div
        className="bg bg-image"
        style={{ backgroundImage: "url(/images/background/bg-1.png)" }}
      ></div> */}

      {/* Upper Box */}

      {/* Widgets Section */}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            <div className="footer-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-xl-7 col-lg-6 col-md-6">
                  <div className="footer-widget about-widget">
                    <h6 className="widget-title">About</h6>
                    <div className="text-1">
                      We provide exceptional home care services, ensuring
                      comfort & well-being.
                    </div>
                    <Link href="/about" className="footer-link">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Explore</h6>
                    <ul className="user-links">
                      <li>
                        <Link href="/services">What We Do</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget contacts-widget">
                <h6 className="widget-title">Contact</h6>
                <div className="text-1">
                  797 NE Kathryn St, Hillsboro, OR 97124, United States
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
                    <div className="text-1">
                      Subscribe for our latest updates and news.
                    </div>
                    <form method="post" action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="email"
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
              <p className="text-1">
                &copy; {new Date().getFullYear()} Warm Touch Homes. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo {
          max-width: 100%;
          display: flex;
          justify-content: center;
          overflow: hidden;
        }

        .logo a {
          display: block;
          max-width: 80px;
        }

        @media (max-width: 768px) {
          .logo a {
            max-width: 80px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
