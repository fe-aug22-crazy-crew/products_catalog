import React from 'react';

import '../promo.scss';

type Props = {
  photoLg: any;
  photoSm: any;
  description: string;
};

export const ImageCreator: React.FC<Props> = ({
  photoLg,
  photoSm,
  description,
}) => {
  return (
    <picture className="promo__pic">
      <source srcSet={photoSm} media="(max-width: 639px)" type="image/jpeg" />
      <img src={photoLg} alt={description} className="promo__img" />
    </picture>
  );
};
