import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import servicesData from "@/data/servicesdata";

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <header
      className={`main-header header-style-three ${
        isMobileMenuVisible ? "mobile-menu-visible" : ""
      }`}
    >
      {/* Header Top */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container">
            <div className="top-left">
              <ul className="social-icon-one">
                <li>
                  <a href="#">
                    <span className="fab fa-x-twitter"></span>
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
              <ul className="list-style-one">
                <li>
                  <i className="fa fa-envelope"></i>{" "}
                  <a href="mailto:warmtouchhomes@gmail.com">
                    warmtouchhomes@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fa fa-phone"></i>{" "}
                  <a href="tel:5037475544">503-747-5544</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Lower */}
      <div className="header-lower">
        <div className="auto-container">
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
                      {servicesData.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/services/${service.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuVisible ? "active" : ""}`}>
        <div className="menu-backdrop" onClick={toggleMobileMenu}></div>
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
            <div className="close-btn" onClick={toggleMobileMenu}>
              <i className="fa fa-times"></i>
            </div>
          </div>

          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <a href="tel:5037475544">503-747-5544</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <i className="lnr-icon-envelope1"></i>
                <span className="title">Send Email</span>
                <a href="mailto:warmtouchhomes@gmail.com">
                  warmtouchhomes@gmail.com
                </a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <i className="lnr-icon-clock"></i>
                <span className="title">Business Hours</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-x-twitter"></i>
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

      {/* Search Popup */}
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

      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
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
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix"></ul>
                </div>
              </nav>
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <span className="lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
