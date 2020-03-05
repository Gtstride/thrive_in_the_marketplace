import React from "react";

import "./ProfileTwo.css";

const ProfileTwo = () => {
  return (
    <section id="about" className="about">
      <div className="section-heading"></div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="about-heading">about Kehinde Adegboyega</h1>
              <div className="single-about-txt">
                <h3>
                  I am a Professional Media Personnel, a brand management
                  consultant, digital Marketer, and what you would call a human
                  right advocate.
                </h3>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspi unde omnis
                  iste natus error sit voluptatem accusantium doloremque lauda
                  ntium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
                  aspernatur aut odit aut fugit,
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>phone</h3>
                      <p>+234 806 114 0996</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>email</h3>
                      <p>kehinde.adegboyegao@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>website</h3>
                      <p>www.kennylive.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src="assets/images/about/kenny.jfif" alt="Kehinde" />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
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

export default ProfileTwo;
