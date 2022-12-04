import React from 'react';
import { Link } from 'react-router-dom';

import './CartItem.scss';
import minus from '../../../images/minus.svg';
// import minusDisabled from '../../../images/minusDisabled.svg';

export const CartItem: React.FC = () => {
  return (
    <li>
      <Link to='' className="cart__item cart-item">
        <div className="cart-item__remove-button"></div>

        <img className="cart-item__image" />

        <p className="cart-item__title">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>

        <div className="cart-item__count-block">
          <div
            className="
            cart-item__count-button
            cart-item__count-button--less"
          >
            <img src={minus} alt="minus" />
          </div>
          <span className="cart-item__count">1</span>
          <div className="
          cart-item__count-button
          cart-item__count-button--more"
          ></div>
        </div>

        <span className="cart-item__price">$999</span>
      </Link>
    </li>
  );
};
