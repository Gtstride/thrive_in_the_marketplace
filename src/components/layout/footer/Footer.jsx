import React from "react";

const Footer = () => {
  return (
    <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()}
            <br />
            Design and developed by Godstime Agho (gtstrides) <br />
            <a href="https://www.gtstrides.com/" className="disabled">Godstime <span>Contact: +234 803 941 5912</span> </a>
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
