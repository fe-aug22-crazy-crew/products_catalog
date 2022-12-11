import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Back.scss';
import ArrowPrev from '../../images/arrow-prev.svg';

export const Back: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button className="back" type="button" onClick={handleBack}>
      <img src={ArrowPrev} alt="return back button" />
      <p>Back</p>
    </button>
  );
};
