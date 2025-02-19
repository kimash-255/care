import Link from "next/link";
import Image from "next/image";

const projectGalleryData = [
  {
    id: 1,
    title: "Senior Citizen Care",
    slug: "senior-citizen-care",
    image: "/images/resource/project-1.jpg",
    category: "Elderly Nutrition",
  },
  {
    id: 2,
    title: "Residential Care",
    slug: "residential-care",
    image: "/images/resource/project-2.jpg",
    category: "Senior Citizen",
  },
  {
    id: 3,
    title: "Medical Checkup",
    slug: "medical-checkup",
    image: "/images/resource/project-3.jpg",
    category: "Home Care",
  },
  {
    id: 4,
    title: "Personalized Care",
    slug: "personalized-care",
    image: "/images/resource/project-4.jpg",
    category: "Quality Support",
  },
];

const ProjectGallery = () => {
  return (
    <section className="project-section-two">
      <div className="auto-container">
        <div className="sec-title light">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="sub-title">Our Work</span>
              <h2 className="text-split">
                A glimpse into <br className="d-none d-sm-block" />
                our compassionate care
              </h2>
            </div>
            <div className="col-lg-6 btn-box">
              <div className="text">
                At Warm Touch Homes, we take pride in delivering exceptional
                senior care services. From personalized wellness plans to
                enriching social activities, our portfolio showcases the
                heartfelt commitment we bring to every resident’s life.
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-outer">
          <div className="project-carousel-three owl-carousel owl-theme">
            {projectGalleryData.map((project) => (
              <div className="project-block" key={project.id}>
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="img-fullwidth"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="content-box">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="theme-btn read-more"
                    >
                      <i className="lnr-icon-arrow-right1"></i>
                    </Link>
                    <h4 className="title">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h4>
                    <ul className="cat-list">
                      <li>{project.category}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
