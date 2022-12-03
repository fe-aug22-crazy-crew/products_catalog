import React from 'react';

import './Logo.scss';

import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to="products_catalog" className="logo">
      <img src={logo} alt="logo" className="logo-img" />
    </Link>
  );
};
