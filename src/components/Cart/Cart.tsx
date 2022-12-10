import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAppSelector } from '../../app/hooks';
import { actions as cartActions } from '../../features/cart';
import { CartItem } from '../../types/CartItem';
import { Back } from '../Back';

import './Cart.scss';

import { CartProduct } from './CartProduct';
import { ModalWindow } from './CartProduct/ModalWindow';

export const Cart: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const [isBuying, setIsBuying] = useState(false);
  const cart: CartItem[] = useAppSelector((state) => state.cart);
  const count = useMemo(
    () => cart.reduce((acc, curr) => acc + curr.count, 0) || 0,
    [cart],
  );

  const totalPrice = useMemo(
    () => cart.reduce((acc, curr) => acc + curr.count * curr.product.price, 0),
    [cart],
  );

  const handleBuying = () => {
    setIsBuying(true);
  };

  const clearCart = () => {
    dispatch(cartActions.clear());
  };

  const handleCloseModal = () => {
    clearCart();
    setIsBuying(false);
  };

  return (
    <main className="cart">
      <div className="container">
        <Back />

        <div className="cart__title">Cart</div>
        <div className="cart__content">
          <ul className="cart__items">
            <TransitionGroup>
              {cart.map((cartItemInfo) => (
                <CSSTransition
                  key={cartItemInfo.product.id}
                  timeout={300}
                  classNames="product"
                  unmountOnExit
                >
                  <CartProduct cartItemInfo={cartItemInfo} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>

          <div className="cart__total">
            <p className="cart__total-price">{`$${totalPrice}`}</p>
            <p className="cart__total-description">
              {count ? `Total for ${count} items` : 'No items in cart yet '}
              {!count && <span>&#x1F625;</span>}
            </p>
            <button className="cart__button-buy" onClick={handleBuying}>
              Checkout
            </button>
          </div>

          <CSSTransition
            timeout={300}
            classNames="product"
            in={isBuying && cart.length > 0}
            unmountOnExit
          >
            <ModalWindow
              handleCloseModal={handleCloseModal}
              clearCart={clearCart}
            />
          </CSSTransition>
        </div>
      </div>
    </main>
  );
});
