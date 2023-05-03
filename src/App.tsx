import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Portfolio from "./section/portfolio";
import About from "./section/about";
import Project from "./section/project";
import Service from "./section/service";
import Contact from "./section/contact";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <script src="/js/jquery-3.6.0.min.js"></script>
          <script src="/js/swiper-bundle.min.js"></script>
          <script src="/js/jquery.meanmenu.min.js"></script>
          <script src="/js/main.js"></script>
        </Helmet>
      </HelmetProvider>
      <Layout>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <div className="portfolio__page">
                <div className="swiper portfolio__main-slider">
                  <div className="swiper-wrapper portfolio__main-wrapper">
                    <div className="swiper-slide">
                      <Portfolio />
                    </div>

                    <div className="swiper-slide">
                      <About />
                    </div>

                    <div className="swiper-slide">
                      <Project />
                    </div>

                    <div className="swiper-slide">
                      <Service />
                    </div>

                    <div className="swiper-slide">
                      <Contact />
                    </div>
                  </div>
                  <div className="swiper-pagination circle-pagination-2"></div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
