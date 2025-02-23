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

// Pass SEO data as JSON-serializable props
export async function getStaticProps() {
  return {
    props: {
      seoData: {
        title: "Elderly Care Services | Warm Touch Homes",
        description:
          "Discover Warm Touch Homes’ elderly care services, including personal care, nutrition, medication management, relaxation activities, and transportation support.",
        keywords:
          "Warm Touch Homes, elderly care, personal care, nutrition, medication management, relaxation activities, transportation support",
        url: "https://warmtouchhomes.org/services",
        image: "https://warmtouchhomes.org/images/warmtouchhomes-services.jpg", // Replace with an actual image URL
        type: "website",
      },
    },
  };
}

export default ServicesPage;
