import { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "Email sent successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <>
      {/* Banner Section */}
      <section
        className="page-title"
        style={{ backgroundImage: "url(/images/background/page-title.jpg)" }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Contact Us</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-details">
        <div className="container pb-70">
          <div className="row">
            {/* Contact Form */}
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us an email</span>
                <h2>Feel free to write</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="email"
                        className="form-control"
                        type="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    name="phone"
                    className="form-control"
                    type="text"
                    placeholder="Enter phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="7"
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-5">
                  <button type="submit" className="theme-btn btn-style-one">
                    <span className="btn-title">Send Message</span>
                  </button>
                </div>
              </form>

              {status.message && (
                <p className={`status-message ${status.type}`}>
                  {status.message}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <p>We're happy to assist you with any inquiries.</p>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    {/* <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div> */}
                    <div className="text">
                      <h6 className="mb-1">Call us</h6>
                      <a href="tel:+15037475544">503-747-5544</a>
                    </div>
                  </li>
                  <li>
                    {/* <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div> */}
                    <div className="text">
                      <h6 className="mb-1">Email us</h6>
                      <a href="mailto:warmtouchhomes@gmail.com">
                        warmtouchhomes@gmail.com
                      </a>
                    </div>
                  </li>
                  <li>
                    {/* <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div> */}
                    <div className="text">
                      <h6 className="mb-1">Visit us</h6>
                      <span>
                        797 NE Kathryn St, Hillsboro, OR 97124, United States
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="map-section py-0">
        <iframe
          className="map w-100"
          src="https://maps.google.com/maps?q=797%20NE%20Kathryn%20St,%20Hillsboro,%20OR%2097124&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="600"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
