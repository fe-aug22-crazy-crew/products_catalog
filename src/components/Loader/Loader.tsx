import React from 'react';
import MoonLoader from 'react-spinners/ClipLoader';
import './Loader.scss';

export const Loader: React.FC = () => (
  <div className="loader">
    <MoonLoader color="#313237" />
  </div>
);
