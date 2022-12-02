import React from 'react';
import 'flexboxgrid2';
import { CSSTransition } from 'react-transition-group';
import { Logo } from '../Logo';
import { Navigation } from './Navigation';
import favourites from '../../images/favourites.svg';
import shopping from '../../images/shopping.svg';
import menu from '../../images/menu.svg';
import { NavLink } from 'react-router-dom';
import cl from 'classnames';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';

export const Header: React.FC = () => {
  const favouritePhones: Phone[] = useAppSelector((state) => state.favourites);

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
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            cl('icon-box', { 'is-active': isActive })
          }
        >
          <CSSTransition
            in={favouritePhones.length > 0}
            timeout={300}
            classNames="header__favourite-count"
            unmountOnExit
          >
            <div className="header__favourite-count">
              {favouritePhones.length}
            </div>
          </CSSTransition>

          <img src={favourites} alt="like" className="icon" />
        </NavLink>
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
