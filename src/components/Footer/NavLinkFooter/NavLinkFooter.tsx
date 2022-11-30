import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  to: string;
};

export const NavLinkFooter: React.FC<Props> = ({ title, to }) => (
  <li className="footer__item">
    <Link to={to} className="footer__link">
      {title}
    </Link>
  </li>
);
