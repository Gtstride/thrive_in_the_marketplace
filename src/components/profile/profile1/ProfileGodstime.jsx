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
                  A Professional Software Designer and Web developer. A media
                  Enthausaiast, Who love to create solutions using technology,
                </h3>

                <p>
                  A google certified android developer 2017 /2018, a certified
                  openclassrom graduate in different technologies of the web , a
                  former Pre-Andela Fellow, a seasoned Web App developer vast in
                  JavaScript, and in different Frameworks." "Due to his passion
                  for technology, he found himself in the field of technology,
                  knowledgeable and vast in Video-editing, Setting-Up
                  Multi-media departments, Animations, creating web
                  applications, using applications as, Premiere Pro, Photoshop,
                  and generally, the Adobe suit and the Microsoft Suit, just to
                  mention but a few of the technologies he has acquired over the
                  years."
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
                      <a href="https://facebook.com/GTstride.godstime.omo.E.Agho">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="www.godstime.com">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/gtstrides_4lyfe">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/in/godstime">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/gtstride/">
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
