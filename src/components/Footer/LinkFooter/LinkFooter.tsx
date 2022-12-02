import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  to: string;
};

export const LinkFooter: React.FC<Props> = ({ title, to }) => (
  <li className="footer__item">
    <a href={to} className="footer__link">
      {title}
    </a>
  </li>
);
