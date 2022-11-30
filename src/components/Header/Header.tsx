import React from 'react';
import 'flexboxgrid2';

export const Header: React.FC = () => {
  const arr = [];
  return (
    <header className={'header col-xs-12 col-lg-6 col-md-8'}>
      <p>Hello, new component!</p>
    </header>
  );
};
