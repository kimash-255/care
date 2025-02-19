"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section-two pull-up">
      <div className="auto-container">
        <div className="row">
          {/* Info Column */}
          <div className="info-column col-xl-7 col-lg-8 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">Get to Know</div>
                <h3 className="text-split">A Place You’ll Love</h3>
              </div>

              <figure className="image overlay-anim">
                <img
                  src="/images/resource/contact.jpg"
                  alt="Contact"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </figure>

              <div className="info-box">
                <span className="icon flaticon-oldkare-birthday"></span>
                <h6 className="title">Safety & Security Guarantee</h6>
                <div className="text">
                  We prioritize safety with a secure, nurturing environment.
                </div>
              </div>
              <div className="info-box">
                <span className="icon flaticon-oldkare-house"></span>
                <h6 className="title">Comfortable Living</h6>
                <div className="text">
                  Experience compassionate care in a home-like setting.
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="form-column col-xl-5 col-lg-8">
            <div className="inner-column">
              <div className="contact-form light">
                <div className="title-box">
                  <span className="sub-title">Contact Us</span>
                  <h3>Send Us a Message</h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Write a Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <button
                      className="theme-btn btn-style-one"
                      type="submit"
                      disabled={loading}
                    >
                      <span className="btn-title">
                        {loading ? "Sending..." : "Send Message"}
                      </span>
                    </button>
                  </div>

                  {responseMessage && (
                    <p className="response-message">{responseMessage}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .image {
          max-width: 100%;
          overflow: hidden;
          margin: 0;
        }

        .contact-section-two {
          overflow: hidden;
          width: 100%;
        }

        @media (max-width: 768px) {
          .image {
            margin: 20px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
