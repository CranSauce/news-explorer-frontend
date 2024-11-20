import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ openModal, onSearch, isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__background">
        <div className="header__overlay"></div>
      </div>
      <Navigation openModal={openModal} isLoggedIn={isLoggedIn}/>
      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;
