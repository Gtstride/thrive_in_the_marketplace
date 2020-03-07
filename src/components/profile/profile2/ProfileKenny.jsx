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
                  Kehinde Adegboyega, is a graduate of communication and member
                  of Advertising Pratitioners Council of Nigeria and Nigerian
                  Institute of Public Relations and DigiClan, a community of
                  Digital Marketer.
                </h3>

                <p>
                  He has over a decade of experience in Marketing, Customer
                  Service, Brand communication and digital marketing. He
                  consults on Brand and Digital Strategy for businesses, not for
                  profit and government parastatals. He has trained staff of
                  Agro Park and Nigeria Social Insurance Trust Fund on Digital
                  Brand Strategy and Excellent customer service.
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
                      <p>kehinde.adegboyegao@<br/>gmail.com</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>website</h3>
                      <p>kennylive.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src="assets/images/about/kenny.jpg" alt="Kehinde" />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/adegboyega.kehinde1">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/marketplaces247">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/kehindeadegboyega">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/kehindeadegboyega">
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
