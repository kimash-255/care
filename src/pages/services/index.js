import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import Services from "@/components/ourservices/services";

const ServicesPage = () => {
  return (
    <Layout>
      <section
        className="page-title"
        style={{ backgroundImage: "url(/images/background/page-title.jpg)" }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Services</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </section>
      <Services />
    </Layout>
  );
};

export default ServicesPage;
