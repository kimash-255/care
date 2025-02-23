import About from "@/components/about";
import ContactForm from "@/components/contact-form";
import Cta from "@/components/cta";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import OurServices from "@/components/ourservices";
import ProjectGallery from "@/components/project-gallery";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/whychooseus";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <OurServices />
        <About />
        <WhyChooseUs />
        <Cta />
        <Testimonial />
        <ContactForm />
      </Layout>
    </>
  );
};

// Pass SEO data as JSON-serializable props
export async function getServerSideProps({ res }) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

  return {
    props: {
      seoData: {
        title: "Warm Touch Homes | Quality Senior Care Services",
        description:
          "Warm Touch Homes provides compassionate adult foster care, offering 24/7 assistance, medication management, personal care, and recreational activities for seniors.",
        keywords:
          "adult foster care, senior care, 24/7 assistance, medication management, personal care, recreational activities",
        url: "https://warmtouchhomes.org",
        image: "https://warmtouchhomes.org/images/warmtouchhomes.jpg",
        type: "website",
      },
    },
  };
}

export default Home;
