import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAppSelector } from '../../app/hooks';
import { CartItem } from '../../types/CartItem';

import './Cart.scss';
import { CartProduct } from './CartProduct';

export const Cart: React.FC = React.memo(() => {
  const cart: CartItem[] = useAppSelector((state) => state.cart);
  const count = useMemo(() => (
    cart.reduce((acc, curr) => acc + curr.count, 0) || 0), [cart]);
  const totalPrice = useMemo(() => (
    cart.reduce((acc, curr) => acc + curr.count * curr.product.price, 0)),
  [cart]);

  return (
    <main className="cart">
      <div className="container">
        <div className="cart__title">Cart</div>
        <div className="cart__content">
          <ul className="cart__items">
            <TransitionGroup>
              {cart.map(cartItemInfo => (
                <CSSTransition
                  key={cartItemInfo.product.id}
                  timeout={300}
                  classNames="product"
                  unmountOnExit
                >
                  <CartProduct cartItemInfo={cartItemInfo}/>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>

          <div className="cart__total">
            <p className="cart__total-price">{`$${totalPrice}`}</p>
            <p className="cart__total-description">
              {count
                ? `Total for ${count} items`
                : 'No items in cart yet '}
              {!count && <span>&#x1F625;</span>}
            </p>
            <Link to="/products_catalog " className="cart__button-buy">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
});
