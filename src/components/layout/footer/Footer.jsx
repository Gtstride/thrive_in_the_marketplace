import React from "react";

const Footer = () => {
  return (
    <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <p>
            &copy; copyright Godstime Agho. design and developed by{" "}
            <a href="https://www.gtstrides.com/">Godstime</a>
          </p>
        </div>
      </div>

      <div id="scroll-Top">
        <div className="return-to-top">
          <i className="fa fa-angle-up " id="scroll-top"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
