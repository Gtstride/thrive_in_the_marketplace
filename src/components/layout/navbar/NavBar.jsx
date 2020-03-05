import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-area">
      <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="navbar-brand" to="/">
              Thrive-in-the-Marketplace
            </Link>
          </div>

          <div
            className="collapse navbar-collapse menu-ui-design"
            id="navbar-menu"
          >
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className=" smooth-menu active"></li>
              <li className="smooth-menu">
                <Link to="/godstime">About Godstime</Link>
              </li>
              <li className="smooth-menu">
                <Link to="/kehinde">About Kehinde</Link>
              </li>
              <li className="smooth-menu">
                <Link to="/shola">About Shola</Link>
              </li>
              <li className="smooth-menu">
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
