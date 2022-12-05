import React from 'react';
import { NavLink } from 'react-router-dom';

import Phones from '../../../images/categories/phones.png';
import Tablets from '../../../images/categories/tablets.png';
import Accessories from '../../../images/categories/acs.png';

import './categories.scss';

export const Categories: React.FC = () => {
  return (
    <section className="categories">
      <h2 className="categories__title">Shop by category</h2>
      <div className="categories__main">
        <div className="categories__category">
          <NavLink
            to={'/phones'}
            className="categories__image-block"
          >
            <img src={Phones} alt="category" className="categories__image" />
          </NavLink>
          <h4>Mobile Phones</h4>
          <p className="categories__count">{'95 models'}</p>
        </div>
        <div className="categories__category">
          <NavLink
            to={'/tablets'}
            className="categories__image-block"
          >
            <img src={Tablets} alt="category" className="categories__image" />
          </NavLink>
          <h4>Tablets</h4>
          <p className="categories__count">{'70 models'}</p>
        </div>
        <div className="categories__category">
          <NavLink
            to={'/accessories'}
            className="categories__image-block"
          >
            <img
              src={Accessories}
              alt="category"
              className="categories__image"
            />
          </NavLink>
          <h4 className="categories__name">Accessories</h4>
          <p className="categories__count">{'115 models'}</p>
        </div>
      </div>
    </section>
  );
};
