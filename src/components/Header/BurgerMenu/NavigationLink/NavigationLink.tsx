import React from 'react';
import cl from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  text: string;
  setMenuIsOpen: (value: boolean) => void;
};

export const NavigationLink: React.FC<Props> = ({
  to,
  text,
  setMenuIsOpen,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cl('burger_menu__link', {
        'is-active': isActive,
      })
    }
    onClick={() => setMenuIsOpen(false)}
  >
    {text}
  </NavLink>
);
