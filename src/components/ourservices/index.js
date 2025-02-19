import Link from "next/link";
import Image from "next/image";
import servicesData from "@/data/servicesdata";

const OurServices = () => {
  return (
    <section className="services-section-two">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Our Services</span>
          <h2 className="text-split">
            We're committed to delivering the
            <br className="d-none d-md-block" />
            highest quality service
          </h2>
        </div>
        <div className="row">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-block-two col-lg-3 col-md-6 wow fadeInUp"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                    />
                  </figure>
                </div>
                <div className="content-box">
                  <i className={`icon ${service.icon}`}></i>
                  <h5 className="title">{service.title}</h5>
                </div>
                <div className="hover-content">
                  <i className={`icon ${service.icon}`}></i>
                  <h5 className="title">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h5>
                  <div className="text">{service.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
