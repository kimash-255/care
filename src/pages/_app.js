import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Link from "next/link";

// Prevent auto-adding the CSS from FontAwesome
config.autoAddCss = false;

// Add icons to the library
library.add(fas, far, fab);

export default function App({ Component, pageProps }) {
  // Set up a state to track whether the app is hydrated (running on the client)
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set isHydrated to true after the component has mounted
    setIsHydrated(true);

    // Scroll-to-top button functionality
    const scrollTopBtn = document.querySelector(".scroll-to-top");
    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    scrollTopBtn.addEventListener("click", scrollToTop);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollTopBtn.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Warm Touch Homes - Quality Senior Care Services</title>
        <meta
          name="description"
          content="Experience exceptional senior care in a comfortable, home-like environment at Warm Touch Homes. Professional and compassionate care services."
        />
        <meta
          name="keywords"
          content="senior care, elderly care, assisted living, home care, Portland care home, Warm Touch Homes"
        />
        <meta name="author" content="Warm Touch Homes" />
        <meta name="theme-color" content="#ffffff" />

        {/* Favicon */}
        <link
          rel="icon"
          href="https://warm-touch.mslabdesigns.com/images/logo.png"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Warm Touch Homes - Quality Senior Care Services"
        />
        <meta
          property="og:description"
          content="Experience exceptional senior care in a comfortable, home-like environment at Warm Touch Homes."
        />
        <meta
          property="og:image"
          content="https://warm-touch.mslabdesigns.com/images/logo.png"
        />
        <meta property="og:image:alt" content="Warm Touch Homes Logo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://warm-touch.mslabdesigns.com/"
        />
        <meta property="og:site_name" content="Warm Touch Homes" />

        {/* Viewport Settings */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://warm-touch.mslabdesigns.com/" />
      </Head>

      {/* Render content directly, avoid showing a loader */}
      {isHydrated ? <Component {...pageProps} /> : null}

      {/* Scroll to top button */}
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-angle-up"></span>
      </div>
    </>
  );
}
