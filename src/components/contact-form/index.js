import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section class="contact-section-two pull-up">
      <div class="auto-container">
        <div class="row">
          {/* <!-- Info Column --> */}
          <div class="info-column col-xl-7 col-lg-8 order-2">
            <div class="inner-column wow fadeInRight">
              <div class="sec-title">
                <div class="sub-title">Get to know</div>
                <h3 class="text-split">A place where you would love</h3>
              </div>

              <figure class="image overlay-anim">
                <img src="images/resource/contact.jpg" alt="" />
              </figure>

              <div class="info-box">
                <span class="icon flaticon-oldkare-birthday"></span>
                <h6 class="title">Safety & Security Guarantee</h6>
                <div class="text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  suspendisse tempor
                </div>
              </div>
              <div class="info-box">
                <span class="icon flaticon-oldkare-house"></span>
                <h6 class="title">Restore Style Living</h6>
                <div class="text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  suspendisse tempor
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Form Column --> */}
          <div class="form-column col-xl-5 col-lg-8">
            <div class="inner-column">
              {/* <!-- Contact Form --> */}
              <div class="contact-form light wow fadeInLeft">
                <div class="title-box">
                  <span class="sub-title">Contact us</span>
                  <h3>Write Email</h3>
                </div>

                {/* <!--Contact Form--> */}
                <form method="post" action="get" id="contact-form">
                  <div class="form-group">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      name="Email"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      name="Phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <textarea
                      name="message"
                      placeholder="Write a Message"
                      required
                    ></textarea>
                  </div>

                  <div class="form-group">
                    <button
                      class="theme-btn btn-style-one"
                      type="submit"
                      name="submit-form"
                    >
                      <span class="btn-title">Send a m essage</span>
                    </button>
                  </div>
                </form>
              </div>
              {/* <!--End Contact Form --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
