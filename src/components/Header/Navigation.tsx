import React from 'react';
import cl from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  text: string;
};

export const Navigation: React.FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cl('navbar-item', {
        'is-active': isActive,
      })
    }
  >
    {text}
  </NavLink>
);
