import React from 'react';
import 'flexboxgrid2';
import { Logo } from '../Logo';
import { Navigation } from './Navigation';
import favourites from '../../images/favourites.svg';
import shopping from '../../images/shopping.svg';
import menu from '../../images/menu.svg';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="header" id="top">
      <Logo />
      <nav className="header__nav">
        <Navigation to="home" text="Home" />
        <Navigation to="phones" text="Phones" />
        <Navigation to="tablets" text="Tablets" />
        <Navigation to="accessories" text="Accessories" />
      </nav>
      <div className="header__c-icons">
        <Link to="/favourites" className="icon-box">
          <img src={favourites} alt="like" className="icon" />
        </Link>
        <div className="icon-box">
          <img src={shopping} alt="shop" className="icon" />
        </div>
        <div className="icon-box icon-box__menu">
          <img src={menu} alt="menu" className="icon" />
        </div>
      </div>
    </header>
  );
};
