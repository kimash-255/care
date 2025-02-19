import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import servicesData from "@/data/servicesdata";
import Layout from "@/components/layout";

const ServiceDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the service based on the slug
  const service = servicesData.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <Layout>
      {/* Page Title Section */}
      <section
        className="page-title"
        style={{
          backgroundImage: `url(/images/background/page-title.jpg)`,
        }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">{service.title}</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>{service.title}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="sidebar-service-list">
                    <ul>
                      {servicesData.map((item) => (
                        <li
                          key={item.id}
                          className={
                            item.title.toLowerCase().replace(/\s+/g, "-") ===
                            slug
                              ? "current"
                              : ""
                          }
                        >
                          <Link
                            href={`/services/${item.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            <i className="fas fa-angle-right"></i>
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Section */}
                  <div className="service-details-help">
                    <h2 className="help-title">Contact Us</h2>
                    <div className="help-contact">
                      <p>Need help? Talk to us</p>
                      <a href="tel:5037475544">503-747-5544</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={750}
                  height={400}
                />
                <h3 className="mt-4">Service Overview</h3>
                <p>{service.description}</p>

                {/* Feature Images */}
                <div className="feature-list mt-4">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <Image
                        className="mb-3"
                        src="/images/resource/service-d1.jpg"
                        alt="service image"
                        width={350}
                        height={250}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <Image
                        className="mb-3"
                        src="/images/resource/service-d2.jpg"
                        alt="service image"
                        width={350}
                        height={250}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Text */}
                <div className="content mt-40">
                  <blockquote className="blockquote-one">
                    "Providing quality care with passion and dedication."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetails;
