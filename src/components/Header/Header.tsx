import React, {useEffect, useState} from 'react';
import 'flexboxgrid2';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import './Header.scss';

import { Logo } from '../Logo';
import { Navigation } from './Navigation';
import favourites from '../../images/favourites.svg';
import shopping from '../../images/shopping.svg';
import menu from '../../images/menu.svg';

import { BurgerMenu } from './BurgerMenu';

export const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (menuIsOpen) {
      disablePageScroll();
    }

    if (!menuIsOpen) {
      enablePageScroll();
    }
  }, [menuIsOpen]);

  const openMenuHandle = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
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
        <div className="icon-box">
          <img src={favourites} alt="like" className="icon" />
        </div>
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
      <BurgerMenu setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen}/>
    </header>
  );
};
