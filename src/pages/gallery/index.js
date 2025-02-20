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

      {/* If an image is selected, show it alone (unchanged display styles) */}
      {selectedImage ? (
        <section
          className="full-image-section"
          style={{ marginTop: "50px", marginBottom: "50px" }}
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
            <div style={{ marginBottom: "20px" }}>
              <span
                onClick={() => setSelectedImage(null)}
                style={{
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                ⬅ Back to Gallery
              </span>
            </div>

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
                }}
              />
            </div>
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
                  className="service-block-two col-lg-3 col-md-6"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="inner-box">
                    <div
                      className="image-box"
                      onClick={() => setSelectedImage(item)}
                      style={{
                        cursor: "pointer",
                        position: "relative",
                        width: "100%",
                        height: "250px",
                      }}
                    >
                      <Image
                        src={item.image}
                        layout="fill"
                        objectFit="cover"
                        alt={item.title}
                      />
                    </div>
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
