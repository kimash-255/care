import Contact from "@/components/contact";
import Layout from "@/components/layout";
import Link from "next/link";

const ContactPage = () => {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

// Pass SEO data as JSON-serializable props
export async function getStaticProps() {
  return {
    props: {
      seoData: {
        title: "Contact Warm Touch Homes | Get in Touch",
        description:
          "Reach out to Warm Touch Homes for senior care inquiries. Call us at 503-747-5544 or visit us at 797 NE Kathryn St, Hillsboro, OR.",
        keywords:
          "Warm Touch Homes, senior care, contact, inquiries, Hillsboro",
        url: "https://warmtouchhomes.org/contact",
        image: "https://warmtouchhomes.org/images/warmtouchhomes-contact.jpg", // Replace with an actual image URL
        type: "website",
      },
    },
  };
}

export default ContactPage;
