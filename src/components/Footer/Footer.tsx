import React from 'react';
import { Link } from 'react-router-dom';

import { NavLinkFooter } from './NavLinkFooter/index';
import logo from '../../images/logo.png';

const navFields = [
  {
    title: 'Github',
    to: 'https://github.com/fe-aug22-crazy-crew/products_catalog',
    id: 1,
  },
  { title: 'Contacts', to: '/index.html', id: 2 },
  { title: 'Rights', to: '/index.html', id: 3 },
];

export const Footer: React.FC = React.memo(() => (
  <footer className="page__footer footer">
    <div className="container">
      <div className="footer__content">
        <Link to="/index.html" className="logo footer__logo">
          <img src={logo} alt="logo Nice Gadgetes" className="logo__img" />
        </Link>

        <nav className="footer__nav">
          <ul className="footer__list">
            {navFields.map(({ title, to, id }) => (
              <NavLinkFooter key={id} title={title} to={to} />
            ))}
          </ul>
        </nav>

        <Link to="#home" className="footer__button--up">
          <p className="footer__back-to-top">Back to top</p>
          <div className="footer__arrow"></div>
        </Link>
      </div>
    </div>
  </footer>
));
