import React from 'react';
import logo from '../assets/mercado-libre-logo.svg';
import iconSearch from '../assets/search.svg';

const Header = () => {
  return (
    <header className="header py-3">
      <div className="container">
        <div className="row px-1">
          <div className="col-2 px-1 d-flex">
            <img src={logo} alt="Mercado Libre Logo" className="header__logo" />
          </div>
          <div className="col-10 px-1">
            <div className="search d-flex">
              <input id="search-input" name="search-input" className="search__input" placeholder="Nunca dejes de buscar" />
              <button type="button" className="d-flex justify-content-center align-items-center search__button">
                <img src={iconSearch} alt="Search icon" className="search__icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;