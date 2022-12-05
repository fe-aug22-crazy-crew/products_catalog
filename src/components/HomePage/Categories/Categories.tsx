import React from 'react';

import Phones from '../../../images/categories/phones.png';
import Tablets from '../../../images/categories/tablets.png';
import Accessories from '../../../images/categories/acs.png';

import './categories.scss';
import { Link } from 'react-router-dom';

export const Categories: React.FC = () => {
  return (
    <section className="categories">
      <h2 className="categories__title">Shop by category</h2>
      <div className="categories__main">
        <div className="categories__category">
          <Link
            to={'/phones'}
            className="categories__image-block categories__image-block--phones"
          >
            <img src={Phones} alt="category" className="categories__image" />
          </Link>
          <h4>Mobile Phones</h4>
          <p className="categories__count">{'95 models'}</p>
        </div>
        <div className="categories__category">
          <Link
            to={'/tablets'}
            className="categories__image-block categories__image-block--tablets"
          >
            <img src={Tablets} alt="category" className="categories__image" />
          </Link>
          <h4>Tablets</h4>
          <p className="categories__count">{'70 models'}</p>
        </div>
        <div className="categories__category">
          <Link
            to={'/accessories'}
            className="categories__image-block
            categories__image-block--accessories"
          >
            <img
              src={Accessories}
              alt="category"
              className="categories__image"
            />
          </Link>
          <h4>Accessories</h4>
          <p className="categories__count">{'115 models'}</p>
        </div>

      </div>
    </section>
  );
};
