import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './navigationLinksWithIcons.scss';
import { CSSTransition } from 'react-transition-group';

type Props = {
  to: string;
  img: string;
  altImg: string;
  setMenuIsOpen: (value: boolean) => void;
  styleClass: string;
  favourites: number | null;
  cart: number | null;
};

export const NavigationLinksWithIcons: React.FC<Props> = ({
  to,
  img,
  altImg,
  setMenuIsOpen,
  styleClass,
  favourites,
  cart,
}) => {
  const count = favourites || cart || 0;

  const className = `navigationLinkWithIcon__${styleClass}`;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn('navigationLinkWithIcon', { 'is-active': isActive })
      }
      onClick={() => setMenuIsOpen(false)}
    >
      <div className="navigationLinkWithIcon__icon-box">
        <CSSTransition
          in={count > 0}
          timeout={300}
          classNames={className}
          unmountOnExit
        >
          <div className={className}>
            {count >= 1 && count}
          </div>
        </CSSTransition>

        <img
          src={img}
          alt={altImg}
          className="navigationLinkWithIcon__icon"
        />
      </div>
    </NavLink>
  );
};
