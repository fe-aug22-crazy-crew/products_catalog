/* eslint-disable max-len */
/* eslint-disable no-shadow */
import React from 'react';
import cn from 'classnames';

import { Logo } from '../../Logo';
import { NavigationLink } from './NavigationLink';
import favourites from '../../../images/favourites.svg';
import shopping from '../../../images/shopping.svg';
import closeMenu from '../../../images/Close.svg';

import './BurgerMenu.scss';

type Props = {
  setMenuIsOpen: (value: boolean) => void;
  menuIsOpen: boolean;
};

export const BurgerMenu: React.FC<Props> = ({ setMenuIsOpen, menuIsOpen }) => {
  const closeMenuHandle = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuIsOpen(false);
  };

  return (
    <section
      className={cn('burger_menu', {
        'burger_menu--open': menuIsOpen,
      })}
    >
      <header className="header header--menu">
        <Logo />
        <div className="header__icons">
          <div className="icon-box icon-box__menu">
            <a href="" className="header__link" onClick={closeMenuHandle}>
              <img src={closeMenu} alt="close menu" className="icon" />
            </a>
          </div>
        </div>
      </header>
      <nav className="burger_menu__nav">
        <NavigationLink
          to="products_catalog"
          text="Home"
          setMenuIsOpen={setMenuIsOpen}
        />
        <NavigationLink
          to="phones"
          text="Phones"
          setMenuIsOpen={setMenuIsOpen}
        />
        <NavigationLink
          to="tablets"
          text="Tablets"
          setMenuIsOpen={setMenuIsOpen}
        />
        <NavigationLink
          to="accessories"
          text="Accessories"
          setMenuIsOpen={setMenuIsOpen}
        />
      </nav>
      <section className="burger_menu__cart-favourites">
        <a href="" className="burger_menu__container">
          <img src={favourites} alt="like" className="burger_menu__icon" />
        </a>
        <a href="" className="burger_menu__container">
          <img src={shopping} alt="shop" className="burger_menu__icon" />
        </a>
      </section>
    </section>
  );
};
