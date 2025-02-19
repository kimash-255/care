import About from "@/components/about";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import OurServices from "@/components/ourservices";
import ProjectGallery from "@/components/project-gallery";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <OurServices />
        <About />
        <ProjectGallery />
      </Layout>
    </>
  );
};
export default Home;
