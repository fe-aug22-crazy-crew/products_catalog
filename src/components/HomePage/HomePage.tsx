import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';

export const HomePage: React.FC = () => {
  const phones = useAppSelector((state) => state.phones);

  return phones.map((phone: Phone) => <h3 key={phone.id}>{phone.phoneId}</h3>);
};
