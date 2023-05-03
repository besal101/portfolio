import React from "react";
import Section from "../section";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Section
      className="portfolio-section portfolio__about pt-140 pb-150"
      id="about"
    >
      <div className="row">
        <div className="col-xxl-8 col-xxl-8 col-lg-8">
          <div className="portfolio__about-left">
            <h2 className="sec-title">
              I craft wonderful <span>digital experiences</span> for brands
            </h2>
            <img src="/images/16.png" alt="Shape" />
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4">
          <div className="sec-text">
            <p>
              As a full-stack developer based in Dubai with over 7 years of
              experience building high-standard software, mobile apps and web
              apps , I have honed my skills in delivering top-quality results. I
              am passionate about collaborating with clients to create engaging
              websites, data visualizations, and long-forms that communicate
              their research effectively and strengthen their networks.
            </p>
            <a href="about.html" className="wc-btn-dark btn-hover">
              Explore Me
            </a>
          </div>
        </div>
      </div>

      <div className="about-row">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
            <div className="brand-title-wrap">
              <h3 className="brand-title">worked with largest brands</h3>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
            <div className="brand-list">
              <div className="brand-logo">
                <img src="/images/lifesmile.png" alt="Brand Logo" />
              </div>
              <div className="brand-logo">
                <img src="/images/phytomed.png" alt="Brand Logo" />
              </div>
              <div className="brand-logo">
                <img src="/images/3.png" alt="Brand Logo" />
              </div>
              <div className="brand-logo">
                <img src="/images/4.png" alt="Brand Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
