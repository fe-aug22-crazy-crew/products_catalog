import React, { useEffect, useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import cl from 'classnames';
import { NavLink } from 'react-router-dom';

import './Header.scss';

import { Logo } from '../Logo';
import { Navigation } from './Navigation';
import favouritesImg from '../../images/favourites.svg';
import shopping from '../../images/shopping.svg';
import menu from '../../images/menu.svg';

import { BurgerMenu } from './BurgerMenu';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';
import { CountInfo } from './CountInfo';
import { CartItem } from '../../types/CartItem';

export const Header: React.FC = () => {
  const favourites: Phone[] = useAppSelector((state) => state.favourites);
  const cart: CartItem[] = useAppSelector((state) => state.cart);
  const countOfFavourites = favourites.length;
  const countInCart = cart.length;

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (menuIsOpen) {
      disablePageScroll();
    }

    if (!menuIsOpen) {
      enablePageScroll();
    }
  }, [menuIsOpen]);

  const openMenuHandle = (openEvent: React.MouseEvent<HTMLAnchorElement>) => {
    openEvent.preventDefault();
    setMenuIsOpen(true);
  };

  return (
    <header className="header" id="top">
      <Logo />
      <nav className="header__nav">
        <Navigation to="/" text="Home" />
        <Navigation to="phones" text="Phones" />
        <Navigation to="tablets" text="Tablets" />
        <Navigation to="accessories" text="Accessories" />
      </nav>
      <div className="header__c-icons">
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            cl('icon-link', { 'is-active': isActive })
          }
        >
          <div className="icon-box">
            <CountInfo
              condition={countOfFavourites > 0}
              count={countOfFavourites}
              burgerMenu={false}
            />
            <img src={favouritesImg} alt="like" className="icon" />
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            cl('icon-link', { 'is-active': isActive })
          }
        >
          <div className="icon-box">
            <CountInfo
              condition={countInCart > 0}
              count={countInCart}
              burgerMenu={false}
            />
            <img src={shopping} alt="cart" className="icon" />
          </div>
        </NavLink>
        <a href="" className="icon-link" onClick={openMenuHandle}>
          <div className="icon-box icon-box__menu">
            <img src={menu} alt="menu" className="icon" />
          </div>
        </a>
      </div>
      <BurgerMenu setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
    </header>
  );
};
