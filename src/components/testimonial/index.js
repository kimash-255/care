import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alex Martin",
    role: "Client",
    image: "/images/resource/testi-1.jpg",
    feedback:
      "The care and attention my loved one receives here is beyond what I imagined. Warm, professional, and truly dedicated.",
  },
  {
    name: "Kevin Martin",
    role: "Family Member",
    image: "/images/resource/testi-2.jpg",
    feedback:
      "Warm Touch Homes is a place where compassion meets excellence. I have peace of mind knowing my mother is in great hands.",
  },
  {
    name: "Sarah Albert",
    role: "Caregiver",
    image: "/images/resource/testi-3.jpg",
    feedback:
      "As a caregiver, I have never felt more supported. The environment here is warm and welcoming for both staff and residents.",
  },
  {
    name: "Mark Hardson",
    role: "Resident",
    image: "/images/resource/testi-1.jpg",
    feedback:
      "I feel like I belong here. The staff is kind, and there are always activities to keep me engaged. It truly feels like home.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section home3-style">
      <div className="bg bg-pattern-5"></div>
      <div className="auto-container">
        <div className="row">
          {/* Title Column */}
          <div className="title-column mb-md-40 col-xl-5 col-lg-4 col-md-12">
            <div className="sec-title mb-40">
              <span className="sub-title">HEAR FROM OUR COMMUNITY</span>
              <h2 className="text-split">What Our Clients Say About Us</h2>
            </div>
            <div className="info-box">
              <i className="icon flaticon-oldkare-love"></i>
              <div className="text">
                Trusted by <strong>over 2,350 families</strong> who found
                comfort and care with us.
              </div>
            </div>
          </div>

          {/* Testimonial Column */}
          <div className="testimonial-column col-xl-7 col-lg-8 col-md-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                          />
                        </figure>
                        <div className="info-box">
                          <h4 className="name">{testimonial.name}</h4>
                          <span className="designation">
                            {testimonial.role}
                          </span>
                        </div>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa fa-star"></i>
                          ))}
                        </div>
                      </div>
                      <div className="text">"{testimonial.feedback}"</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
