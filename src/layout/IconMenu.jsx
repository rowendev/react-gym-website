import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

function IconMenu() {
  return (
    <div className="social">
      <ul className="socialList">
        <li className="socialItem" style={{ backgroundColor: "#0095ff" }}>
          <a href="">
            <FaLinkedin size={20} />
            Linkedin
          </a>
        </li>
        {/*
        <li className="socialItem" style={{ backgroundColor: "#333333" }}>
          <a href="">
            <FaGithub size={20} />
            Github
          </a>
        </li>
        <li className="socialItem" style={{ backgroundColor: "#6fc2b0" }}>
          <a href="">
            <FaEnvelope size={20} />
            Email
          </a>
        </li>
        <li
          className="socialItem"
          style={{
            background: "#ff885d",
          }}
        >
          <a href="">
            <FaInstagram size={20} />
            Instagram
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default IconMenu;
