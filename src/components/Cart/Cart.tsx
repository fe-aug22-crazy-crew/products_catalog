import React from 'react';
import { Link } from 'react-router-dom';

import './Cart.scss';
import { CartItem } from './CartItem';

export const Cart: React.FC = () => {
  return (
    <main className="cart">
      <div className="container">
        <div className="cart__title">Cart</div>
        <div className="cart__content">
          <ul className="cart__items">
            <CartItem />
          </ul>

          <div className="cart__total">
            <p className="cart__total-price">$2657</p>
            <p className="cart__total-description">Total for 3 items</p>
            <Link to="/products_catalog " className="cart__button-buy">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
