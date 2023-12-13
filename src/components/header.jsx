import React from 'react';
import logo from 'images/pngwing.com.png';
import menu from 'images/open-menu-6208.svg';

export const Header = ({ menuClick }) => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logos">
          <button className="menu" onClick={() => menuClick()}>
            <img alt="menu" src={menu} className="menu__logo" />
          </button>
          <a href="/" className="header__link">
            <img src={logo} alt="logo" className="header__logo" />
          </a>
        </div>
        <div className="buttons tablet">
          <button className="button">
            Sing up
          </button>
          <button className="button">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
