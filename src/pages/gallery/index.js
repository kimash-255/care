import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import galleryData from "@/data/gallerydata";
import Layout from "@/components/layout";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Layout>
      {/* Banner Section */}
      <section
        className="page-title"
        style={{ backgroundImage: "url(/images/background/page-title.jpg)" }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Gallery</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* If an image is selected, show it alone */}
      {selectedImage ? (
        <section
          className="full-image-section"
          style={{ marginTop: "50px", marginBottom: "50px" }} // Margin Top & Bottom
        >
          <div
            className="auto-container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              textAlign: "center",
            }}
          >
            {/* Back to Gallery Link (Top, Black Text) */}
            <div style={{ marginBottom: "20px" }}>
              <span
                onClick={() => setSelectedImage(null)}
                style={{
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#000", // Black color
                  textDecoration: "none",
                }}
              >
                ⬅ Back to Gallery
              </span>
            </div>

            {/* Full Image */}
            <div className="full-image-box">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={900}
                height={600}
                style={{
                  maxWidth: "90%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>

            {/* Title Below Image */}
          </div>
        </section>
      ) : (
        /* Gallery Section */
        <section className="services-section-two pb-90">
          <div className="auto-container">
            <div className="row">
              {galleryData.map((item) => (
                <div
                  key={item.id}
                  className="service-block-two col-lg-3 col-md-6 wow fadeInUp"
                >
                  <div className="inner-box">
                    {/* Clickable Image */}
                    <div
                      className="image-box"
                      onClick={() => setSelectedImage(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <figure className="image">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </figure>
                    </div>

                    {/* Clickable Title */}
                    <div
                      className="content-box"
                      style={{ textAlign: "center", cursor: "pointer" }}
                      onClick={() => setSelectedImage(item)}
                    >
                      <h5 className="title">{item.title}</h5>
                    </div>

                    {/* Hover Content */}
                    {/* <div
                      className="hover-content"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedImage(item)}
                    >
                      <h5 className="title">{item.title}</h5>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default GalleryPage;
