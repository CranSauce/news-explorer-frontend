import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <nav aria-label="Footer navigation" className="footer__nav">
          <ul className="footer__links">
            <li>
              <a href="/" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://tripleten.com"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                TripleTen
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer__icons">
          <a
            href="https://github.com/CranSauce"
            target="_blank"
            rel="noreferrer"
            className="footer__icon-link"
          >
            <img src={githubIcon} alt="GitHub" className="footer__icon" />
          </a>
          <a
            href="https://facebook.com/profile.php?id=100025919100952"
            target="_blank"
            rel="noreferrer"
            className="footer__icon-link"
          >
            <img src={facebookIcon} alt="Facebook" className="footer__icon" />
          </a>
        </div>
      </div>

      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Andrew Thomas
      </div>
    </footer>
  );
}

export default Footer;
