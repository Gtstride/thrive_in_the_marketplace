import React from "react";

import "./ProfileOne.css";

const ProfileOne = () => {
  return (
    <section id="about" className="about">
      <div className="section-heading"></div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="about-heading">about GodsTime Agho</h1>
              <div className="single-about-txt">
                <h3>
                  I am a Professional UI/UX Designer and Web developer.
                  Consectetur an adipisi elita, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam quis
                  nostrud.
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
                      <p>+234 803 941 5912</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>email</h3>
                      <p>lewisagho47@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>website</h3>
                      <p>gtstrides.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src="assets/images/about/gt.jpg" alt="Godstime" />
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

export default ProfileOne;
