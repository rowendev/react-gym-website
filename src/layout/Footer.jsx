import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__desc">
          <h1>RWN FITNESS</h1>
          <p>fitness gym in taipei</p>
          <p id="phone">+886-000-000</p>
        </div>
        <div className="footer__links">
          <h2 className="footer__title">Contact us</h2>
          <a href="/" className="footer__link">
            Contact
          </a>
          <a href="/" className="footer__link">
            Support
          </a>
          <a href="/" className="footer__link">
            Sponsor
          </a>
        </div>

        <div className="footer__links">
          <h2 className="footer__title">Membership</h2>
          <a href="/" className="footer__link">
            pricing
          </a>
          <a href="/" className="footer__link">
            plans
          </a>
          <a href="/" className="footer__link">
            FAQ
          </a>
        </div>
        <div className="footer__links">
          {/* <h2 className="footer__title">Social media</h2> */}
          <a href="/" className="footer__link">
            <FaFacebook size={30} />
          </a>
          <a href="/" className="footer__link">
            <FaInstagram size={30} />
          </a>
          <a href="/" className="footer__link">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>

      <p className="footer__brand">
        Copyright © {year} Created by RWN LIN. All Rights Reserved. [CASE STUDY]
      </p>
    </div>
  );
}

export default Footer;
