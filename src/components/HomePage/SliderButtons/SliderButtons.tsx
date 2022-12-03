import React from 'react';

import './sliderButtons.scss';

type Props = {
  refClassPrev: string;
  refClassNext: string;
};

export const SliderButtons: React.FC<Props> = ({
  refClassPrev,
  refClassNext,
}) => {
  const buttonPrevClass = `button-box__button-prev ${refClassPrev}`;
  const buttonNextClass = `button-box__button-next ${refClassNext}`;

  return (
    <div className="button-box">
      <div className={buttonPrevClass}></div>
      <div className={buttonNextClass}></div>
    </div>
  );
};
