import React from "react";
import { Link } from "react-router-dom";

const GalleryView = () => {
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="portfolio-details">
          <div className="section-heading text-center">
            <h2>portfolio</h2>
          </div>
          <div className="container">
            <div className="portfolio-content">
              <div className="isotope">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src="assets/images/portfolio/gt.jfif"
                        alt="portfolio"
                      />
                      <div className="isotope-overlay">
                        <Link to="/godstime">ui/ux design</Link>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src="assets/images/portfolio/ken.jfif"
                        alt="portfolio"
                      />
                      <div className="isotope-overlay">
                        <Link to="/kehinde">Digital Marketing</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src="assets/images/portfolio/fliy.jfif"
                        alt="portfolio"
                      />
                      <div className="isotope-overlay">
                        <Link to="/about">Market Place Success</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src="assets/images/portfolio/gt.jfif"
                        alt="portfolio"
                      />
                      <div className="isotope-overlay">
                        <Link to="/godstime">web development</Link>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src="assets/images/portfolio/life.jfif"
                        alt="portfolio"
                      />
                      <div className="isotope-overlay">
                        <Link to="/shola">Life coach</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryView;
