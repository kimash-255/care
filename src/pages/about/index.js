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

export default AboutPage;
