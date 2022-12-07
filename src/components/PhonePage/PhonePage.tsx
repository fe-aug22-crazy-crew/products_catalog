import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { Info } from './Info/Info';

export const PhonePage: React.FC = () => {
  return (
    <main>
      <div className="container">
        <Breadcrumbs />

        <Info />
      </div>
    </main>
  );
};
