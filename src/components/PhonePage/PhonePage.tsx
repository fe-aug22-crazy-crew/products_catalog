import React from 'react';
import { Position } from '../Position';
import { Info } from './Info/Info';
import { PhonePageMain } from './PhonePageMain';

export const PhonePage: React.FC = () => {
  return (
    <main>
      <div className="container">
        <Position />
        <PhonePageMain />
        <Info />
      </div>
    </main>
  );
};
