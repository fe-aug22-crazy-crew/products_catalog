import React, { useEffect, useState } from 'react';

import ArrowPrev from '../../../images/arrow-prev.svg';

import './phonePageMain.scss';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { FavouriteIcon } from '../../PhoneCard/FavouriteIcon';
import notFavourite from '../../../images/favourites.svg';
import favourite from '../../../images/selectedFavourite.svg';
import { PhoneData } from '../../../types/PhoneData';
import { Colors } from '../../../utils/phoneColors';

import { useDispatch } from 'react-redux';
import { Phone } from '../../../types/Phone';
import { useAppSelector } from '../../../app/hooks';
import { CartItem } from '../../../types/CartItem';
import { actions as favouritesActions } from '../../../features/favourites';
import { actions as cartActions } from '../../../features/cart';

type Props = {
  phone: PhoneData;
  setUpdate: (value: (val: number) => number) => void;
};

export const PhonePageMain: React.FC<Props> = ({ phone, setUpdate }) => {
  const {
    images,
    colorsAvailable,
    capacityAvailable,
    priceRegular,
    priceDiscount,
    screen: phoneScreen,
    resolution,
    processor,
    ram,
    name: phoneName,
    color: phoneColor,
    capacity: phoneCapacity,
    id,
    namespaceId,
  } = phone;

  const [bigPhoto, setBigPhoto] = useState('');

  const [stateColor, setStateColor] = useState(phoneColor);
  const [stateCapacity, setStateCapacity] = useState(phoneCapacity);
  const [path, setPath] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const favouritePhones: Phone[] = useAppSelector((state) => state.favourites);
  const cart: CartItem[] = useAppSelector((state) => state.cart);

  const isSelected = favouritePhones.some(
    (product) => product.itemId === phone.id,
  );
  const isItInCart = cart.some(
    (itemInfo) => itemInfo.product.itemId === phone.id,
  );

  const handleAddingToFavourites = (selectedPhone: Phone) => {
    if (!isSelected) {
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

  const handleChangeColor = (color: string) => {
    const currentPath = document.location.hash.slice(1).split('-');
    const ind = currentPath.findIndex((part) => part === phoneColor);

    currentPath.splice(ind, 1, color);

    const newPath = currentPath.join('-');

    setPath(newPath);
    setStateColor(color);
  };

  const handleChangeCapacity = (capacity: string) => {
    const normalizedCapacity = capacity.toLowerCase();
    const currentPath = document.location.hash.slice(1).split('-');
    const ind = currentPath.findIndex(
      (part) => part === phoneCapacity.toLowerCase(),
    );

    currentPath.splice(ind, 1, normalizedCapacity);

    const newPath = currentPath.join('-');

    setPath(newPath);
    setStateCapacity(normalizedCapacity);
  };

  useEffect(() => {
    if (
      stateColor !== phoneColor
      || stateCapacity !== phoneCapacity.toLowerCase()
    ) {
      navigate(path, { replace: true });
      setUpdate((prev) => prev + 1);
    }
  }, [stateColor, stateCapacity]);

  useEffect(() => {
    setBigPhoto(images[0]);
  }, [images]);

  const phoneToSave = {
    id: Math.random(),
    phoneId: namespaceId,
    itemId: id,
    name: phoneName,
    fullPrice: priceRegular,
    price: priceDiscount,
    screen: phoneScreen,
    capacity: phoneCapacity,
    color: phoneColor,
    ram,
    year: Math.random(),
    image: images[0],
    category: { name: 'phone' },
  };

  return (
    <section className="phonePageMain">
      <Link to="/phones" className="phonePageMain__link-back">
        <button className="phonePageMain__back" type="button">
          <img src={ArrowPrev} alt="return back button" />
          <p>Back</p>
        </button>
      </Link>
      <h2 className="phonePageMain__title">{phoneName}</h2>
      <div className="phonePageMain__main-section">
        <div className="phonePageMain__photos-section">
          <div className="phonePageMain__small-photos">
            {images.map((photo) => {
              return (
                <div
                  className="phonePageMain__small-photo-box"
                  key={Math.random()}
                  onClick={() => setBigPhoto(photo)}
                >
                  <img
                    src={'https://teal-tiramisu-13c82d.netlify.app/' + photo}
                    alt="phone photo"
                    className="phonePageMain__small-photo"
                  />
                </div>
              );
            })}
          </div>
          <div className="phonePageMain__photo-box">
            <img
              src={'https://teal-tiramisu-13c82d.netlify.app/' + bigPhoto}
              className="phonePageMain__big-photo"
            />
          </div>
        </div>
        <div className="phonePageMain__info-section">
          <div className="phonePageMain__subtitle-box">
            <p className="phonePageMain__selection">Available colors</p>
            <p className="phonePageMain__selection">ID: 802390</p>
          </div>
          <div className="phonePageMain__container">
            <div className="phonePageMain__colors">
              {colorsAvailable.map((color) => {
                return (
                  <div
                    className={cn('phonePageMain__color-circle', {
                      active: phoneColor === color,
                    })}
                    key={Math.random()}
                    title={color}
                    onClick={() => handleChangeColor(color)}
                  >
                    <div
                      className="phonePageMain__color-circle-inner"
                      style={{
                        backgroundColor: Colors[color as keyof typeof Colors],
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <hr className="phonePageMain__line" />
            <p className="phonePageMain__selection">Select capacity</p>
            <div className="phonePageMain__capacity">
              {capacityAvailable.map((capacity) => {
                return (
                  <button
                    key={Math.random()}
                    className={cn('phonePageMain__capacity-button', {
                      'phonePageMain__capacity-button--active':
                        capacity === phoneCapacity,
                    })}
                    onClick={() => handleChangeCapacity(capacity)}
                    type="button"
                  >
                    {capacity}
                  </button>
                );
              })}
            </div>
            <hr className="phonePageMain__line phonePageMain__line--bottom" />
            <div className="phonePageMain__price">
              {(priceRegular > priceDiscount && (
                <>
                  <h2 className="phonePageMain__price-discount">
                    {priceDiscount + '$'}
                  </h2>
                  <p className="phonePageMain__price-regular">
                    {priceRegular + '$'}
                  </p>
                </>
              )) || (
                <h2 className="phonePageMain__price-discount">
                  {priceRegular + '$'}
                </h2>
              )}
            </div>
            <div className="product__options phonePageMain__options">
              {!isItInCart ? (
                <button
                  className="product__cart-adding
                  product__cart-adding--product-page"
                  type="button"
                  onClick={() => handleAddingToCart(phoneToSave)}
                >
                  Add to cart
                </button>
              ) : (
                <Link
                  to="/cart"
                  className="product__cart-adding
                  product__cart-adding--added
                  product__cart-adding--product-page"
                >
                  Added to cart
                </Link>
              )}

              <button
                className="product__favourite-adding"
                type="button"
                onClick={() => handleAddingToFavourites(phoneToSave)}
              >
                <FavouriteIcon
                  condition={!isSelected}
                  image={notFavourite}
                  alt={'notFavorite'}
                />

                <FavouriteIcon
                  condition={isSelected}
                  image={favourite}
                  alt={'favorite'}
                />
              </button>
            </div>
            <div className="phonePageMain__specs">
              <div className="phonePageMain__specs-category">
                <p className="phonePageMain__specs-category-name">Screen</p>
                <p className="phonePageMain__specs-category-value">
                  {phoneScreen}
                </p>
              </div>
              <div className="phonePageMain__specs-category">
                <p className="phonePageMain__specs-category-name">Resolution</p>
                <p className="phonePageMain__specs-category-value">
                  {resolution}
                </p>
              </div>
              <div className="phonePageMain__specs-category">
                <p className="phonePageMain__specs-category-name">Processor</p>
                <p className="phonePageMain__specs-category-value">
                  {processor}
                </p>
              </div>
              <div className="phonePageMain__specs-category">
                <p className="phonePageMain__specs-category-name">RAM</p>
                <p className="phonePageMain__specs-category-value">{ram}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
