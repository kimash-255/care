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
export default Home;
