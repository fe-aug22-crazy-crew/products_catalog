import React from 'react';
import { NavLink } from 'react-router-dom';

import './ModalWindow.scss';

type Props = {
  handleCloseModal: () => void;
  clearCart: () => void;
};

export const ModalWindow: React.FC<Props> = ({
  handleCloseModal,
  clearCart,
}) => (
  <div className="modal">
    <div className="modal__content">
      <button
        className="modal__button-close"
        onClick={handleCloseModal}
      ></button>
      <p className="modal__message">Thanks for your order! &#x1F44C;</p>
      <NavLink
        to="/"
        className="modal__button-go"
        onClick={clearCart}
      >
        Back to Home
      </NavLink>
    </div>
  </div>
);
