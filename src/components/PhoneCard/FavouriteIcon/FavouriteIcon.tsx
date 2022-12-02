import React from 'react';
import { CSSTransition } from 'react-transition-group';

type Props = {
  condition: boolean;
  image: string;
  alt: string;
}

export const FavouriteIcon: React.FC<Props> = ({ 
  condition,
  image, 
  alt,
}) => (
  <CSSTransition
    in={condition}
    timeout={300}
    classNames="product__favourite-adding"
    unmountOnExit
  >
    <img src={image} alt={alt} />
  </CSSTransition>
);