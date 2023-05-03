import React from "react";
import Section from "../section";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <Section className="portfolio__hero-area portfolio-section" id="portfolio">
      <div className="row">
        <div className="col-xxl-12">
          <div className="portfolio__hero">
            <h1 className="title shape-circle">Full stack</h1>
            <h2 className="title text-stroke">Web & Mobile</h2>
            <h2 className="title">developer</h2>
            <div className="btn-wrapper">
              <a href="portfolio.html" className="wc-btn-dark">
                View all work
              </a>
            </div>
            {/* <img
              src="/images/1.png"
              alt="Personal Portfolio"
              className="pp-thumb"
            /> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
