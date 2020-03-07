import React from "react";

import "./ProfileThree.css";

const ProfileThree = () => {
  return (
    <section id="about" className="about">
      <div className="section-heading"></div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="about-heading">about Shola Olayeni</h1>
              <div className="single-about-txt">
                <h3>
                  Shola is a registered Electrical Engineer, Project Manager and
                  Life Coach with 13 years of work experience.
                </h3>

                <p>
                  With a proven track record in procurement, facility
                  management, project management, inventory management and
                  quality assurance in the financial services sector. He is the
                  founder and Managing Director of Pinnacle Force Nigeria
                  Limited, an Engineering Services and Management Consulting
                  firm.
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>phone</h3>
                      <p>+234 802 850 7456</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>email</h3>
                      <p>sholaolayeni@<br />gmail.com</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>website</h3>
                      <p>sholaolayemi.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src="assets/images/about/last.jfif" alt="shola_olayemi" />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/shola.olayemi/">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/pinnacleforceng/">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Sholanzy">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/shola-olayemi/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/pinnacleforceng/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileThree;
