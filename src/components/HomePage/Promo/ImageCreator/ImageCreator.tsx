import React from 'react';

import '../promo.scss';

type Props = {
  photoLg: any,
  photoSm: any,
};

export const ImageCreator: React.FC<Props> = ({ photoLg, photoSm }) => {
  return (
    <picture className="promo__pic">
      <source
        srcSet={photoSm}
        media="(max-width: 639px)"
        type="image/jpeg"
      />
      <img src={photoLg} alt="promo banner" className="promo__img" />
    </picture>
  );
};
