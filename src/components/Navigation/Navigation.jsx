import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isSavedNews, openModal }) {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`navigation ${isMenuOpen ? "navigation-open" : ""} ${
        isSavedNews ? "navigation__saved-news" : ""
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
              <button
                className="navigation__mobile-menu-signin"
                onClick={() => openModal("login")}
              >
                Sign In
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <Link
            to="/"
            className={`navigation__logo nav-item ${
              isSavedNews ? "saved-news" : ""
            }`}
          >
            NewsExplorer
          </Link>
          <div className="navigation__buttons">
            <Link
              to="/"
              className={`navigation__home-btn nav-item ${
                isSavedNews ? "saved-news" : ""
              }`}
            >
              Home
            </Link>
            {!isSavedNews && (
              <button
                className="navigation__signin-btn nav-item"
                onClick={() => openModal("login")}
              >
                Sign in
              </button>
            )}
            {isSavedNews && (
              <Link
                to="/saved-news"
                className={`navigation__saved-btn nav-item ${
                  isSavedNews ? "saved-news" : ""
                }`}
              >
                Saved Articles
              </Link>
            )}
            {isSavedNews && (
              <button
                className={`navigation__logout-btn nav-item ${
                  isSavedNews ? "saved-news" : ""
                }`}
              >
                Elise
              </button>
            )}
          </div>
        </>
      )}
    </nav>
  );
}

export default Navigation;
