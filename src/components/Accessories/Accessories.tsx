import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';

import './Tabltes.scss';

export const Tabltes: React.FC = () => {
  return (
    <main className="tablets">
      <div className="container">
        <div className="tablets__content">
          <Breadcrumbs />
          <h1 className="tablets__title">Accessories</h1>
        </div>
      </div>
    </main>
  );
};
