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
            Compassionate Care, Trusted Support. <br />
            Enhancing Lives with Every Step.
          </h1>
          <Link href="/services" className="theme-btn btn-style-one hvr-light">
            <span className="btn-title">Explore Our Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
