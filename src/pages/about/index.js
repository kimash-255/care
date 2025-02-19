import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import About from "@/components/about";
import Service from "@/components/ourservices/service";

const AboutPage = () => {
  return (
    <Layout>
      <section
        class="page-title"
        style="background-image: url(images/background/page-title.jpg)"
      >
        <div class="auto-container">
          <div class="title-outer text-center">
            <h1 class="title">About Us</h1>
            <ul class="page-breadcrumb">
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
