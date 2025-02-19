import Link from "next/link";
import Image from "next/image";
import servicesData from "@/data/servicesdata";

const Services = () => {
  return (
    <section className="services-section-two pb-90">
      <div className="auto-container">
        <div className="row">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-block-two col-lg-3 col-md-6 wow fadeInUp"
            >
              <Link href={`/services/${service.slug || "#"}`}>
                <div className="inner-box">
                  {/* Service Image */}
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

                  {/* Content Box */}
                  <div className="content-box">
                    <i className={`icon ${service.icon}`}></i>
                    <h5 className="title">{service.title}</h5>
                  </div>

                  {/* Hover Content */}
                  <div className="hover-content">
                    <i className={`icon ${service.icon}`}></i>
                    <h5 className="title">{service.title}</h5>
                    <div className="text">{service.description}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-block-two a {
          text-decoration: none;
          color: inherit;
          display: block;
          height: 100%;
        }

        .service-block-two:hover {
          cursor: pointer;
        }

        .inner-box {
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Services;
