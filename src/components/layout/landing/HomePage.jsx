import React from "react";
// import { Link } from "react-router-dom";

// import ReserveSpace from '../../reserve-space/'

const HomePage = () => {
  return (
    <div>
      <section id="welcome-hero" className="welcome-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="header-text">
                <h2>
                  <span></span> i am here to help you <span>Thrive</span> in the{" "}
                  <br />
                  business<span> space.</span>
                </h2>
                <p>Thrive In The Market Place</p>
                <a href="https://forms.gle/5UpX7HVnb8sKHhAz8">
                  Reserve Your Space
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
