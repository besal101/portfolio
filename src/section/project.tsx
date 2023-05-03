import React from "react";
import Section from "../section";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <Section className="portfolio-section portfolio__project" id="project">
      <div className="row">
        <div className="col-xxl-12">
          <div className="pp-title-wrap">
            <h2 className="pp-title">
              Selected <br /> Work
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
          <div className="pp-slider-wrapper">
            <div className="swiper portfolio__project-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide pp-slide">
                  <div
                    className="pp-slide-img"
                    style={{ backgroundColor: "#E1E2FF" }}
                  >
                    <a
                      href="https://atomicjobs.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/atomicjobs.jpg" alt="Atomic Jobs" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide pp-slide">
                  <div
                    className="pp-slide-img"
                    style={{ backgroundColor: "#FFEAE6" }}
                  >
                    <a
                      href="https://lifesmile.ae/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/lifesmileweb.jpg"
                        alt="Lifesmile Ecommerce Website"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide pp-slide">
                  <div
                    className="pp-slide-img"
                    style={{ backgroundColor: "#333" }}
                  >
                    <a
                      href="https://app.lifesmile.ae/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/HappyHourFood.jpg"
                        alt="Portfolio Thumbnail"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide pp-slide">
                  <div className="pp-slide-img">
                    <a
                      href="https://www.phytomednepal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/phytomedweb.jpg"
                        alt="Portfolio Thumbnail"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pp-next swipper-btn">prev</div>
            <div className="pp-prev swipper-btn">Next</div>
          </div>
        </div>

        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
          <div className="swiper portfolio__project-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="pp-slide-thumb">
                  <h3 className="pp-slide-title">Atomic Jobs</h3>
                  <p>Jobs Search Engine</p>
                  <p>(Nextjs, Prisma, Mysql, Typescript, Sass)</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="pp-slide-thumb">
                  <h3 className="pp-slide-title">
                    Lifesmile Ecommerce Website
                  </h3>
                  <p>Ecommerce Website</p>
                  <p>(Nextjs, Prisma, MongoDb, Typescript, Redux, Tailwind)</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="pp-slide-thumb">
                  <h3 className="pp-slide-title">Food Delivery App</h3>
                  <p>React Native App</p>
                  <p>
                    (React Native, Nest Js, GraphQL, Mysql, Typescript,
                    Tailwind)
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="pp-slide-thumb">
                  <h3 className="pp-slide-title">Phytomed Nepal</h3>
                  <p>Chemistry, Molecular Formula & Disease Database </p>
                  <p>(React, Express, MongoDb, Typescript)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Project;
