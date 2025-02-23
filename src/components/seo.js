import Head from "next/head";

const SEO = ({
  title,
  description,
  keywords,
  url,
  image = "https://www.warmtouchhomes.com/logo.png",
  type,
}) => {
  const linkedinLink = "https://www.linkedin.com/company/warmtouchhomes";
  const twitterLink = "https://twitter.com/warmtouchhomes";
  const instagramLink = "https://www.instagram.com/warmtouchhomes/";
  const facebookLink = "https://www.facebook.com/warmtouchhomes/";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Warm Touch Homes" />
      <meta name="robots" content="index, follow" />
      <meta name="robots" content="max-image-preview:large" />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="twitter:creator" content={twitterLink} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@warmtouchhomes" />
      <meta name="twitter:creator" content="@warmtouchhomes" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="linkedin:profile" content={linkedinLink} />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />
      <meta property="instagram:account" content={instagramLink} />
      <meta property="facebook:page" content={facebookLink} />
      <meta property="facebook:title" content={title} />
      <meta property="facebook:description" content={description} />
      <meta property="facebook:image" content={image} />
    </Head>
  );
};

// Set Home Page Details as Default
SEO.defaultProps = {
  title: "Warm Touch Homes - Quality Senior Care Services",
  description:
    "Warm Touch Homes provides exceptional home care services, ensuring comfort and well-being for seniors. Our services include 24/7 on-site trained staff, medication management, personal care assistance, housekeeping, meals, recreational activities, and transportation support.",
  keywords:
    "senior care, elderly care, home care, adult foster home, medication management, personal care, housekeeping, meals, recreational activities, transportation support",
  url: "https://www.warmtouchhomes.org",
  image: "https://www.warmtouchhomes.org/images/logo.png", // Replace with actual branded image
  type: "website",
};

export default SEO;
