import React, { Component } from "react";
import { Link } from "react-router-dom";

class ReserveSpace extends Component {
  constructor(prop) {
    super();
    this.state = {};
  }

  componentDidMount() {}
  render() {
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
                <li className="smooth-menu">
                  <Link to="https://forms.gle/5UpX7HVnb8sKHhAz8">
                    Reserve Your Space
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default ReserveSpace;
