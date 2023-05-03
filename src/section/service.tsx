import React from "react";
import Section from "../section";

interface ServiceProps {}

const Service: React.FC<ServiceProps> = () => {
  return (
    <Section
      className="portfolio-section portfolio__service pt-140 pb-140"
      id="service"
    >
      <div className="row">
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
          <h2 className="sec-title">I MAKE THE Service BETTER.</h2>
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
          <div className="sec-text">
            <p>
              From ideation to implementation, I've got your mobile and web
              development needs covered. With 7+ years of experience as a full
              stack developer, let me bring your digital vision to life.
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio__service-list">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <div className="portfolio__service-item">
              <a href="service-details.html">
                <h3 className="ps-title">
                  Frontend <br /> Developemnt
                </h3>
                <ul>
                  <li>+ React, NextJS & Vue</li>
                  <li>+ Tailwind, Material UI, Bootstrap, Chakra UI</li>
                  <li>+ Figma, Illustrator & Photoshop</li>
                  <li>+ Typescript & Javascript</li>
                  <li>+ Redux & Context Api</li>
                </ul>
              </a>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <div className="portfolio__service-item">
              <a href="service-details.html">
                <h3 className="ps-title">
                  Backend
                  <br /> Developemnt
                </h3>
                <ul>
                  <li>+ NestJs </li>
                  <li>+ Express</li>
                  <li>+ Rest Api, GraphQl & TRPC Design</li>
                  <li>+ MongoDB, Postgres & MySQL</li>
                  <li>+ Redis & Memcached</li>
                  <li>+ Prisma, TypeORM</li>
                </ul>
              </a>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <div className="portfolio__service-item">
              <a href="service-details.html">
                <h3 className="ps-title">
                  Mobile APP
                  <br /> Developemnt
                </h3>
                <ul>
                  <li>+ React Native</li>
                  <li>+ Flutter</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-12">
          <div className="ps-btn">
            <a href="contact.html">
              Call me to get more extra service <strong>call now</strong>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
