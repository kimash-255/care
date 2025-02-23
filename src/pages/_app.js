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
import SEO from "@/components/seo";

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
      {pageProps.seoData && <SEO {...pageProps.seoData} />}{" "}
      {/* Render content directly, avoid showing a loader */}
      {isHydrated ? <Component {...pageProps} /> : null}
      {/* Scroll to top button */}
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-angle-up"></span>
      </div>
    </>
  );
}
