import React, { useCallback, useEffect } from 'react';
import cn from 'classnames';

import { Logo } from '../../Logo';
import { NavigationLink } from './NavigationLink';
import favourites from '../../../images/favourites.svg';
import cart from '../../../images/shopping.svg';
import closeMenu from '../../../images/Close.svg';

import './BurgerMenu.scss';
import { NavigationLinksWithIcons } from './NavigationLinksWithIcons';
import { Phone } from '../../../types/Phone';
import { useAppSelector } from '../../../app/hooks';

type Props = {
  setMenuIsOpen: (value: boolean) => void;
  menuIsOpen: boolean;
};

export const BurgerMenu: React.FC<Props> = ({ setMenuIsOpen, menuIsOpen }) => {
  const favouritePhones: Phone[] = useAppSelector((state) => state.favourites);
  const countOfFavourites = favouritePhones.length;

  const closeMenuHandle = (eve: React.MouseEvent<HTMLAnchorElement>) => {
    eve.preventDefault();
    setMenuIsOpen(false);
  };

  const [dimensions, setDimensions] = React.useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setDimensions(window.innerWidth);
  }, []);

  useEffect(() => {
    if (dimensions > 640) {
      setMenuIsOpen(false);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <section
      className={cn('burger_menu', {
        'burger_menu--open': menuIsOpen && dimensions < 640,
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
        <NavigationLinksWithIcons
          to={'/favourites'}
          img={favourites}
          altImg={'favourites'}
          setMenuIsOpen={setMenuIsOpen}
          styleClass={'display-count'}
          favourites={countOfFavourites}
          cart={null}
        />
        <NavigationLinksWithIcons
          to={'/cart'}
          img={cart}
          altImg={'cart'}
          setMenuIsOpen={setMenuIsOpen}
          styleClass={'display-count'}
          favourites={null}
          cart={15} // insert here number of items in the cart
        />
      </section>
    </section>
  );
};
