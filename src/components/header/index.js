import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import servicesData from "@/data/servicesdata";

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        // Only change sticky state on desktop
        if (window.scrollY > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else {
        // Always sticky on mobile
        setIsSticky(true);
      }
    };

    // Set initial state for mobile
    if (window.innerWidth <= 768) {
      setIsSticky(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <div className="logo bg-white p-2 rounded-lg">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="Warm Touch Homes Logo"
                    width={260}
                    height={260}
                    priority
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
                    <Link href="/services">Services</Link>
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
                  width={100}
                  height={250}
                />
              </Link>
            </div>
            <div className="close-btn" onClick={toggleMobileMenu}>
              <i className="fa fa-times"></i>
            </div>
          </div>

          {/* Mobile Navigation */}
          <ul className="navigation">
            <li>
              <Link href="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/services" onClick={toggleMobileMenu}>
                Services
              </Link>
              <ul>
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={toggleMobileMenu}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/gallery" onClick={toggleMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Contact Section in Mobile Menu */}
          {/* <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="fa fa-phone"></i>
                <a href="tel:5037475544">503-747-5544</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <i className="fa fa-envelope"></i>
                <a href="mailto:warmtouchhomes@gmail.com">
                  warmtouchhomes@gmail.com
                </a>
              </div>
            </li>
          </ul> */}

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

      {/* Sticky Header */}
      <div className={`sticky-header ${isSticky ? "fixed-header" : ""}`}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Warm Touch Homes Logo"
                  width={100}
                  height={250}
                  priority
                />
              </Link>
            </div>

            <div className="nav-outer">
              <nav className="main-menu">
                <ul className="navigation">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <span className="lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .header-top,
          .header-lower {
            display: none;
          }

          .sticky-header {
            display: flex !important;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            padding: 10px 0;
          }

          .sticky-header .inner-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 5px 15px;
            min-height: 80px;
          }

          .sticky-header .logo {
            max-width: 120px;
            height: auto;
            padding: 5px 0;
          }

          .sticky-header .navigation {
            display: flex;
            gap: 15px;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .sticky-header .navigation li a {
            font-size: 14px;
            color: #333;
            text-decoration: none;
          }

          /* Add margin to main content to prevent overlap with fixed header */
          body {
            padding-top: 80px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
