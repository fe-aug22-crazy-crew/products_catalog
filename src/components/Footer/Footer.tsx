import React from 'react';
import { Link } from 'react-router-dom';

import { LinkFooter } from './LinkFooter/index';
import logo from '../../images/logo.png';
import { infoFields } from './constants';
import './footer.scss';

export const Footer: React.FC = React.memo(() => (
  <footer className="page__footer footer">
    <div className="container">
      <div className="footer__content">
        <Link to="/home" className="logo footer__logo">
          <img src={logo} alt="logo Nice Gadgetes" className="logo__img" />
        </Link>

        <div className="footer__info">
          <ul className="footer__list">
            {infoFields.map(({ title, to, id }) => (
              <LinkFooter key={id} title={title} to={to} />
            ))}
          </ul>
        </div>

        <a href="#top" className="footer__button--up">
          <p className="footer__back-to-top">Back to top</p>
          <div className="footer__arrow"></div>
        </a>
      </div>
    </div>
  </footer>
));
