/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import 'flexboxgrid2';
import cl from 'classnames';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import './Header.scss';

import { Logo } from '../Logo';
import { Navigation } from './Navigation';
import favourites from '../../images/favourites.svg';
import shopping from '../../images/shopping.svg';
import menu from '../../images/menu.svg';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';

import { BurgerMenu } from './BurgerMenu';

export const Header: React.FC = () => {
  const favouritePhones: Phone[] = useAppSelector((state) => state.favourites);
  const countOfFavourites = favouritePhones.length;
  const screenWidth = window.innerWidth;

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (menuIsOpen) {
      disablePageScroll();
    }

    if (!menuIsOpen) {
      enablePageScroll();
    }
  }, [menuIsOpen]);

  useEffect(() => {
    if (window.innerWidth > 639) {
      setMenuIsOpen(false);
    }
  }, [screenWidth]);

  const openMenuHandle = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuIsOpen(true);
  };

  return (
    <header className="header" id="top">
      <Logo />
      <nav className="header__nav">
        <Navigation to="products_catalog" text="Home" />
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
              {countOfFavourites >= 1 && countOfFavourites}
            </div>
          </CSSTransition>

          <img src={favourites} alt="like" className="icon" />
        </NavLink>
        <div className="icon-box">
          <img src={shopping} alt="shop" className="icon" />
        </div>
        <a
          href=""
          className="icon-box icon-box__menu"
          onClick={openMenuHandle}
        >
          <img src={menu} alt="menu" className="icon" />
        </a>
      </div>
      <BurgerMenu setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
    </header>
  );
};
