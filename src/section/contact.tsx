import React from "react";
import Section from "../section";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <Section
      className="portfolio-section portfolio__footer-area  pt-130"
      id="contact"
    >
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div className="sec-title-wrapper">
            <h2 className="pf-title">Let’s get in touch</h2>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div className="contact__text">
            <p>
              Take your digital presence to new heights with our full stack
              mobile and web developer. Let us build your digital future today!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
          <div className="pf-contact">
            <h3>
              I am just a call away <br />
              Say hello
            </h3>
            <ul>
              <li>
                <a href="tel:+(971)526936570">+(971) 526 - 936 - 570</a>
              </li>
              <li>
                <a href="mailto:hello@bishalkhatri.com">
                  hello@bishalkhatri.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
          <div className="contact__form">
            <form action="#">
              <div className="row g-3">
                <div className="col-xxl-6 col-xl-6 col-12">
                  <input type="text" name="name" placeholder="Name *" />
                </div>
                <div className="col-xxl-6 col-xl-6 col-12">
                  <input type="email" name="email" placeholder="Email *" />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-xxl-6 col-xl-6 col-12">
                  <input type="tel" name="phone" placeholder="Phone" />
                </div>
                <div className="col-xxl-6 col-xl-6 col-12">
                  <input type="text" name="subject" placeholder="Subject *" />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12">
                  <textarea name="message" placeholder="Messages *"></textarea>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12">
                  <div className="pc-btn">
                    <button className="wc-btn-dark">Send Me Quotes</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
