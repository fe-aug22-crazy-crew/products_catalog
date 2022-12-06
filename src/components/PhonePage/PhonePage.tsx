import React from 'react';
import { Position } from '../Position';
import { Info } from './Info/Info';

export const PhonePage: React.FC = () => {
  return (
    <main>
      <div className="container">
        <Position />

        <Info />
      </div>
    </main>
  );
};
