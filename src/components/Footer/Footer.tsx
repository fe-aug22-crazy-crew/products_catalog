import React from 'react';

import { LinkFooter } from './LinkFooter/index';
import logo from '../../images/logo.png';
import { infoFields } from './constants';
import './footer.scss';
import { Link } from 'react-router-dom';

export const Footer: React.FC = React.memo(() => (
  <footer className="page__footer footer">
    <div className="container">
      <div className="footer__content">
        <Link
          to="/"
          className="logo footer__logo"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo Nice Gadgetes" className="logo__img" />
        </Link>

        <div className="footer__info">
          <ul className="footer__list">
            {infoFields.map(({ title, to, id }) => (
              <LinkFooter key={id} title={title} to={to} />
            ))}
          </ul>
        </div>

        <div
          className="footer__button--up"
          onClick={() => window.scrollTo(0, 0)}
        >
          <p className="footer__back-to-top">Back to top</p>
          <div className="footer__arrow"></div>
        </div>
      </div>
    </div>
  </footer>
));
