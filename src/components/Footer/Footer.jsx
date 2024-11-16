import React from "react";
import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="/" className="footer__link">
            Home
          </a>
          <a
            href="https://tripleten.com"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            TripleTen
          </a>
        </div>

        <div className="footer__icons">
          <img src={githubIcon} alt="GitHub" className="footer__icon" />

          <img src={facebookIcon} alt="Facebook" className="footer__icon" />
        </div>
      </div>

      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Andrew Thomas
      </div>
    </footer>
  );
}

export default Footer;
