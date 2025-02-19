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
        <title>Destiny Care Home</title>
        <meta
          name="description"
          content="Providing the best care and support at Destiny Care Home."
        />
        <meta
          name="keywords"
          content="care home, elderly care, assisted living, Destiny Care Home"
        />
        <meta name="author" content="Destiny Care Home" />
        <meta name="theme-color" content="#ffffff" />

        {/* Favicon */}
        <link
          rel="icon"
          href="https://www.destinycarehome.org/assets/img/service/01.jpg"
        />

        {/* Open Graph Meta Tags (for link sharing previews) */}
        <meta property="og:title" content="Destiny Care Home" />
        <meta
          property="og:description"
          content="Providing the best care and support at Destiny Care Home."
        />
        <meta
          property="og:image"
          content="https://www.destinycarehome.org/assets/img/service/01.jpg"
        />
        <meta property="og:image:alt" content="Destiny Care Home Logo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.destinycarehome.org/" />

        {/* Viewport Settings */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
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
