import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alex Martin",
    role: "Family Member",
    feedback:
      "The care and attention my mother receives at Warm Touch Homes is beyond what I imagined. The staff is warm, professional, and truly dedicated to ensuring her comfort and happiness.",
  },
  {
    name: "Kevin Wilson",
    role: "Family Member",
    feedback:
      "Warm Touch Homes has been a blessing for our family. The personalized care and attention my father receives gives us complete peace of mind. It truly feels like an extension of our family.",
  },
  {
    name: "Sarah Thompson",
    role: "Family Member",
    feedback:
      "Finding Warm Touch Homes was the best decision we made for mom. The home-like environment, individualized care, and genuine compassion from the staff have made such a positive difference in her life.",
  },
  {
    name: "Michael Brooks",
    role: "Family Member",
    feedback:
      "The dedication to providing quality care is evident in everything they do. My aunt has flourished here, enjoying activities and forming meaningful connections. It's everything we hoped for and more.",
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
                Trusted by <strong>over 100 families</strong> who found comfort
                and care with us.
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
                      <div className="info-box">
                        <h4 className="name">{testimonial.name}</h4>
                        <span className="designation">{testimonial.role}</span>
                      </div>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
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
