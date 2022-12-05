import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './navigationLinksWithIcons.scss';
import { CountInfo } from '../../CountInfo';

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
  favourites,
  cart,
}) => {
  const count = favourites || cart || 0;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn('navigationLinkWithIcon', { 'is-active': isActive })
      }
      onClick={() => setMenuIsOpen(false)}
    >
      <div className="navigationLinkWithIcon__icon-box">
        <CountInfo condition={count > 0} count={count} burgerMenu={true}/>

        <img src={img} alt={altImg} className="navigationLinkWithIcon__icon" />
      </div>
    </NavLink>
  );
};
