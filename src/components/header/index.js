import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="main-header header-style-three">
      {/* <!-- Header Top --> */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container">
            <div className="top-left">
              <ul className="social-icon-one">
                <li>
                  <a href="#">
                    <span className="fa fa-x"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest-p"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="top-right">
              {/* <!-- Info List --> */}
              <ul className="list-style-one">
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:warmtouchhomes@gmail.com">
                    warmtouchhomes@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i> 503-747-5544
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Top --> */}

      {/* <!-- Header Lower --> */}
      <div className="header-lower">
        <div className="auto-container">
          {/* <!-- Main box --> */}
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="Oitech"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>
            </div>

            {/* <!--Nav Box--> */}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                      <li>
                        <Link href="/services">Services List</Link>
                      </li>
                      <li>
                        <Link href="/services/details">Service Details</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Added Gallery Link */}
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              {/* <!-- Main Menu End--> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header Lower --> */}

      {/* <!-- Mobile Menu  --> */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>

        {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Oitech"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <div className="close-btn">
              <i className="icon fa fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix">
            {/* <!--Keep This Empty / Menu will come through Javascript--> */}
          </ul>
          <ul className="contact-list-one">
            <li>
              {/* <!-- Contact Info Box --> */}
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <a href="tel:5037475544">503-747-5544</a>
              </div>
            </li>
            <li>
              {/* <!-- Contact Info Box --> */}
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1"></span>
                <span className="title">Send Email</span>
                <a href="mailto:warmtouchhomes@gmail.com">
                  warmtouchhomes@gmail.com
                </a>
              </div>
            </li>
            <li>
              {/* <!-- Contact Info Box --> */}
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock"></span>
                <span className="title">Business Hours</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fa fa-x"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
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
        </nav>
      </div>
      {/* <!-- End Mobile Menu --> */}

      {/* <!-- Header Search --> */}
      <div className="search-popup">
        <span className="search-back-drop"></span>
        <button className="close-search">
          <span className="fa fa-times"></span>
        </button>

        <div className="search-inner">
          <form method="post" action="/">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                placeholder="Search..."
                required
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- End Header Search --> */}

      {/* <!-- Sticky Header  --> */}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            {/* <!--Logo--> */}
            <div className="logo">
              <Link href="/" title="">
                <Image
                  src="/images/logo-2.png"
                  alt="Oitech"
                  width={150}
                  height={50}
                />
              </Link>
            </div>

            {/* <!--Right Col--> */}
            <div className="nav-outer">
              {/* <!-- Main Menu --> */}
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                  </ul>
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}

              {/* <!--Mobile Navigation Toggler--> */}
              <div className="mobile-nav-toggler">
                <span className="icon lnr-icon-bars"></span>
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
