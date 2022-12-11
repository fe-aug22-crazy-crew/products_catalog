import React from 'react';

type Props = {
  title: string;
  to: string;
};

export const LinkFooter: React.FC<Props> = ({ title, to }) => (
  <li className="footer__item">
    <a
      href={to}
      className="footer__link"
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  </li>
);
