import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';
{
  /* Homepage content here */
}
export const HomePage: React.FC = () => {
  {/* Use this syntax to get data from redux provider*/}
  const phones = useAppSelector(state => state.phones);
  return (
    phones.map((phone: Phone) => <h3 key={phone.id}>{phone.phoneId}</h3>)
  );
};
