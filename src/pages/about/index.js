import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import About from "@/components/about";
import Service from "@/components/ourservices/service";

const AboutPage = () => {
  return (
    <Layout>
      <section
        className="page-title"
        style={{ backgroundImage: "url('/images/background/page-title.jpg')" }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">About Us</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </section>

      <About />
      <Service />
    </Layout>
  );
};

// Pass SEO data as JSON-serializable props
export async function getStaticProps() {
  return {
    props: {
      seoData: {
        title: "About Warm Touch Homes | Compassionate Senior Care",
        description:
          "Learn about Warm Touch Homes, dedicated to providing seniors with personalized care, comfort, and a warm, supportive environment for independent living.",
        keywords:
          "Warm Touch Homes, senior care, personalized care, independent living, supportive environment",
        url: "https://warmtouchhomes.org/about",
        image: "https://warmtouchhomes.org/images/warmtouchhomes-about.jpg", // Replace with an actual image URL
        type: "website",
      },
    },
  };
}

export default AboutPage;
