import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__desc">
          <h1>RWN FITNESS</h1>
          <p>fitness gym in taipei</p>
          <p id="phone">+886</p>
        </div>
        <div className="footer__links">
          <h2 className="footer__title">Contact us</h2>
          <a href="" className="footer__link">
            Contact
          </a>
          <a href="" className="footer__link">
            Support
          </a>
          <a href="" className="footer__link">
            Sponsor
          </a>
        </div>
      </div>
      <div className="footer__wrapper">
        <div className="footer__links">
          <h2 className="footer__title">Membership</h2>
          <a href="" className="footer__link">
            pricing
          </a>
          <a href="" className="footer__link">
            plans
          </a>
          <a href="" className="footer__link">
            FAQ
          </a>
        </div>
        <div className="footer__links">
          <h2 className="footer__title">Social media</h2>
          <a href="" className="footer__link">
            Facebook
          </a>
          <a href="" className="footer__link">
            Instagram
          </a>
          <a href="" className="footer__link">
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
