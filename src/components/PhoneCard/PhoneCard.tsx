import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { actions as favouritesActions } from '../../features/favourites';
import { Phone } from '../../types/Phone';
import './PhoneCard.scss';
import notFavourite from '../../images/favourites.svg';
import favourite from '../../images/selectedFavourite.svg';
import { FavouriteIcon } from './FavouriteIcon';
import { actions as cartActions } from '../../features/cart';
import { CartItem } from '../../types/CartItem';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const {
    image,
    category,
    itemId,
    name: phoneName,
    price,
    fullPrice,
    screen: phoneScreen,
    capacity,
    ram,
  } = phone;

  const dispatch = useDispatch();
  const favouritePhones: Phone[] = useAppSelector((state) => state.favourites);
  const cart: CartItem[] = useAppSelector((state) => state.cart);

  const isFavourite = favouritePhones.some(
    (product) => product.itemId === phone.itemId,
  );
  const isItInCart = cart.some(
    (itemInfo) => itemInfo.product.itemId === phone.itemId,
  );

  const handleAddingToFavourites = (selectedPhone: Phone) => {
    if (!isFavourite) {
      dispatch(favouritesActions.add(selectedPhone));
    } else {
      dispatch(favouritesActions.remove(selectedPhone));
    }
  };

  const handleAddingToCart = (selectedPhone: Phone) => {
    if (!isItInCart) {
      const productInCart = {
        product: selectedPhone,
        count: 1,
      };

      dispatch(cartActions.add(productInCart));
    }
  };

  useEffect(() => {
    window.localStorage.setItem('favourites', JSON.stringify(favouritePhones));
  }, [favouritePhones]);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="product">
      <NavLink to={`/${category.name}/${itemId}`}>
        <img
          className="product__image"
          src={`https://teal-tiramisu-13c82d.netlify.app/${image}`}
          alt={itemId}
        />

        <p className="product__name">{phoneName}</p>
      </NavLink>

      <div className="product__price-block">
        {
          <>
            <p className="product__price">${price}</p>
            <p className="product__full-price">${fullPrice}</p>
          </>
        }
      </div>

      <ul className="product__properties">
        <li className="product__property">
          <p className="product__property-name">Screen</p>
          <p className="product__property-value">{phoneScreen}</p>
        </li>

        <li className="product__property">
          <p className="product__property-name">Capacity</p>
          <p className="product__property-value">{capacity}</p>
        </li>

        <li className="product__property">
          <p className="product__property-name">RAM</p>
          <p className="product__property-value">{ram}</p>
        </li>
      </ul>

      <div className="product__options">
        {!isItInCart ? (
          <button
            className="product__cart-adding"
            type="button"
            onClick={() => handleAddingToCart(phone)}
          >
            Add to cart
          </button>
        ) : (
          <NavLink
            to="/cart"
            className="product__cart-adding product__cart-adding--added"
          >
            Added to cart
          </NavLink>
        )}

        <button
          className="product__favourite-adding"
          type="button"
          onClick={() => handleAddingToFavourites(phone)}
        >
          <FavouriteIcon
            condition={!isFavourite}
            image={notFavourite}
            alt={'notFavorite'}
          />

          <FavouriteIcon
            condition={isFavourite}
            image={favourite}
            alt={'favorite'}
          />
        </button>
      </div>
    </div>
  );
};
