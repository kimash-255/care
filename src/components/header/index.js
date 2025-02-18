import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header class="main-header header-style-three">
      {/* <!-- Header Top --> */}
      <div class="header-top">
        <div class="auto-container">
          <div class="inner-container">
            <div class="top-left">
              <ul class="social-icon-one">
                <li>
                  <a href="#">
                    <span class="fa fa-x"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fab fa-facebook-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fab fa-pinterest-p"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="top-right">
              {/* <!-- Info List --> */}
              <ul class="list-style-one">
                <li>
                  <i class="fa fa-envelope"></i>
                  <a href="/cdn-cgi/l/email-protection#701e15151418151c0030131f1d00111e095e131f1d">
                    <span
                      class="__cf_email__"
                      data-cfemail="58363d3d3c303d3428183b373528393621763b3735"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </li>
                <li>
                  <i class="fa fa-map-marker"></i> 88 Broklyn Golden Street. New
                  York
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Top --> */}

      {/* <!-- Header Lower --> */}
      <div class="header-lower">
        <div class="auto-container">
          {/* <!-- Main box --> */}
          <div class="main-box">
            <div class="logo-box">
              <div class="logo">
                <a href="index.html">
                  <img src="images/logo.png" alt="" title="Oitech" />
                </a>
              </div>
            </div>

            {/* <!--Nav Box--> */}
            <div class="nav-outer">
              <nav class="nav main-menu">
                <ul class="navigation">
                  <li class="current dropdown">
                    <a href="index.html">Home</a>
                    <ul>
                      <li>
                        <a href="index.html">Home page 01</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home page 02</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home page 03</a>
                      </li>
                      <li class="dropdown">
                        <a href="#">Single Style</a>
                        <ul>
                          <li>
                            <a href="index-1-single.html">Single Style One</a>
                          </li>
                          <li>
                            <a href="index-2-single.html">Single Style Two</a>
                          </li>
                          <li>
                            <a href="index-3-single.html">Single Style Three</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#">Dark Style</a>
                        <ul>
                          <li>
                            <a href="index-1-dark.html">Dark Style One</a>
                          </li>
                          <li>
                            <a href="index-2-dark.html">Dark Style Two</a>
                          </li>
                          <li>
                            <a href="index-3-dark.html">Dark Style Three</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index-1-rtl.html">RTL Style</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="page-about.html">About</a>
                      </li>
                      <li class="dropdown">
                        <a href="#">Packages</a>
                        <ul>
                          <li>
                            <a href="page-projects.html">Packages List</a>
                          </li>
                          <li>
                            <a href="page-project-details.html">
                              Package Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#">Team</a>
                        <ul>
                          <li>
                            <a href="page-team.html">Team List</a>
                          </li>
                          <li>
                            <a href="page-team-details.html">Team Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="page-testimonial.html">Testimonial</a>
                      </li>
                      <li>
                        <a href="page-pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="page-faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="page-404.html">Page 404</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#">Services</a>
                    <ul>
                      <li>
                        <a href="page-services.html">Services List</a>
                      </li>
                      <li>
                        <a href="page-service-details.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#">News</a>
                    <ul>
                      <li>
                        <a href="news-grid.html">News Grid</a>
                      </li>
                      <li>
                        <a href="news-details.html">News Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
              {/* <!-- Main Menu End--> */}

              <div class="outer-box">
                <div class="ui-btn-outer border-0">
                  <button class="ui-btn ui-btn search-btn">
                    <span class="icon lnr lnr-icon-search"></span>
                  </button>
                  <a href="#" class="ui-btn">
                    <i class="lnr-icon-shopping-cart"></i>
                  </a>
                </div>

                {/* <!-- Mobile Nav toggler --> */}
                <div class="mobile-nav-toggler">
                  <span class="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header Lower --> */}

      {/* <!-- Mobile Menu  --> */}
      <div class="mobile-menu">
        <div class="menu-backdrop"></div>

        {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
        <nav class="menu-box">
          <div class="upper-box">
            <div class="nav-logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" title="" />
              </a>
            </div>
            <div class="close-btn">
              <i class="icon fa fa-times"></i>
            </div>
          </div>

          <ul class="navigation clearfix">
            {/* <!--Keep This Empty / Menu will come through Javascript--> */}
          </ul>
          <ul class="contact-list-one">
            <li>
              {/* <!-- Contact Info Box --> */}
              <div class="contact-info-box">
                <i class="icon lnr-icon-phone-handset"></i>
                <span class="title">Call Now</span>
                <a href="tel:+92880098670">+92 (8800) - 98670</a>
              </div>
            </li>
            <li>
              {/* <!-- Contact Info Box --> */}
              <div class="contact-info-box">
                <span class="icon lnr-icon-envelope1"></span>
                <span class="title">Send Email</span>
                <a href="/cdn-cgi/l/email-protection#6f070a031f2f0c00021f0e0116410c0002">
                  <span
                    class="__cf_email__"
                    data-cfemail="82eae7eef2c2e1edeff2e3ecfbace1edef"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </div>
            </li>
            <li>
              {/* <!-- Contact Info Box --> */}
              <div class="contact-info-box">
                <span class="icon lnr-icon-clock"></span>
                <span class="title">Send Email</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          <ul class="social-links">
            <li>
              <a href="#">
                <i class="fa fa-x"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- End Mobile Menu --> */}

      {/* <!-- Header Search --> */}
      <div class="search-popup">
        <span class="search-back-drop"></span>
        <button class="close-search">
          <span class="fa fa-times"></span>
        </button>

        <div class="search-inner">
          <form method="post" action="index.html">
            <div class="form-group">
              <input
                type="search"
                name="search-field"
                value=""
                placeholder="Search..."
                required=""
              />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- End Header Search --> */}

      {/* <!-- Sticky Header  --> */}
      <div class="sticky-header">
        <div class="auto-container">
          <div class="inner-container">
            {/* <!--Logo--> */}
            <div class="logo">
              <a href="index.html" title="">
                <img src="images/logo-2.png" alt="" title="" />
              </a>
            </div>

            {/* <!--Right Col--> */}
            <div class="nav-outer">
              {/* <!-- Main Menu --> */}
              <nav class="main-menu">
                <div class="navbar-collapse show collapse clearfix">
                  <ul class="navigation clearfix">
                    {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                  </ul>
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}

              {/* <!--Mobile Navigation Toggler--> */}
              <div class="mobile-nav-toggler">
                <span class="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sticky Menu --> */}
    </header>
  );
};
export default Header;
