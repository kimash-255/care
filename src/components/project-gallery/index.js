import Link from "next/link";
import Image from "next/image";

const ProjectGallery = () => {
  return (
    <section class="project-section-two">
      <div class="auto-container">
        <div class="sec-title light">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <span class="sub-title">Cases Gallery</span>
              <h2 class="text-split">
                Our beautiful portfolio <br class="d-none d-sm-block" />
                cases gallery
              </h2>
            </div>
            <div class="col-lg-6 btn-box">
              <div class="text">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words which don't slightly but the majority have
                suffered
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-outer">
          {/* <!-- Prject Carousel --> */}
          <div class="project-carousel-three owl-carousel owl-theme">
            {/* <!-- Project Block Three--> */}
            <div class="project-block">
              <div class="inner-box">
                <div class="image-box">
                  <div class="image">
                    <img
                      src="images/resource/project-1.jpg"
                      class="img-fullwidth"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content-box">
                  <a
                    href="page-project-details.html"
                    class="theme-btn read-more"
                  >
                    <i class="lnr-icon-arrow-right1"></i>
                  </a>
                  <h4 class="title">
                    <a href="page-project-details.html">Senior Citizen Care</a>
                  </h4>
                  <ul class="cat-list">
                    <li>Elderly Nutrition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Project Block Three--> */}
            <div class="project-block">
              <div class="inner-box">
                <div class="image-box">
                  <div class="image">
                    <img
                      src="images/resource/project-2.jpg"
                      class="img-fullwidth"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content-box">
                  <a
                    href="page-project-details.html"
                    class="theme-btn read-more"
                  >
                    <i class="lnr-icon-arrow-right1"></i>
                  </a>
                  <h4 class="title">
                    <a href="page-project-details.html">Residential Care</a>
                  </h4>
                  <ul class="cat-list">
                    <li>Senior Citizen</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Project Block Three--> */}
            <div class="project-block">
              <div class="inner-box">
                <div class="image-box">
                  <div class="image">
                    <img
                      src="images/resource/project-3.jpg"
                      class="img-fullwidth"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content-box">
                  <a
                    href="page-project-details.html"
                    class="theme-btn read-more"
                  >
                    <i class="lnr-icon-arrow-right1"></i>
                  </a>
                  <h4 class="title">
                    <a href="page-project-details.html">Medical Checkup</a>
                  </h4>
                  <ul class="cat-list">
                    <li>Provide Home</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Project Block Three--> */}
            <div class="project-block">
              <div class="inner-box">
                <div class="image-box">
                  <div class="image">
                    <img
                      src="images/resource/project-4.jpg"
                      class="img-fullwidth"
                      alt=""
                    />
                  </div>
                </div>
                <div class="content-box">
                  <a
                    href="page-project-details.html"
                    class="theme-btn read-more"
                  >
                    <i class="lnr-icon-arrow-right1"></i>
                  </a>
                  <h4 class="title">
                    <a href="page-project-details.html">Personalized Care</a>
                  </h4>
                  <ul class="cat-list">
                    <li>Quality Food</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectGallery;
