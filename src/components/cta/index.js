import Link from "next/link";
import Image from "next/image";

const Cta = () => {
  return (
    <section
      className="call-to-action alternate"
      style={{ backgroundImage: "url(./images/background/1.jpg)" }}
    >
      <div className="auto-container">
        <div className="title-box wow fadeInUp">
          <h1 className="title">
            Our mission is to provide accurate <br />
            and timely medical.
          </h1>
          <Link
            href="page-services.html"
            className="theme-btn btn-style-one hvr-light"
          >
            <span className="btn-title">Discover more</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
