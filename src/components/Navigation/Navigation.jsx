import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isSavedNews, isLoggedIn, handleLogout, openModal }) {
  const isMobile = useMediaQuery({ query: "(max-width: 505px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`navigation ${isMenuOpen ? "navigation--open" : ""} ${
        isSavedNews ? "navigation--saved-news" : ""
      }`}
    >
      {isMobile ? (
        <>
          <Link to="/" className="navigation__logo">
            NewsExplorer
          </Link>
          <button className="navigation__menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
          {isMenuOpen && (
            <div className="navigation__mobile-menu">
              <Link to="/" className="navigation__mobile-menu-home">
                Home
              </Link>
              {!isLoggedIn && (
                <button
                  className="navigation__mobile-menu-signin"
                  onClick={() => openModal("login")}
                >
                  Sign In
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          <Link to="/" className="navigation__logo nav-item">
            NewsExplorer
          </Link>
          <div className="navigation__buttons">
            <Link to="/" className="navigation__home-btn nav-item">
              Home
            </Link>
            {isLoggedIn && (
              <Link to="/saved-news" className="navigation__saved-btn nav-item">
                Saved Articles
              </Link>
            )}
            {!isLoggedIn && !isSavedNews && (
              <button
                className="navigation__signin-btn nav-item"
                onClick={() => openModal("login")}
              >
                Sign in
              </button>
            )}
            {isLoggedIn && (
              <button
                className="navigation__logout-btn nav-item"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </>
      )}
    </nav>
  );
}

export default Navigation;
