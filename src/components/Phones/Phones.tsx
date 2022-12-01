import React from 'react';
import { PhoneCard } from '../../PhoneCard';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';
import './Phones.scss';

export const Phones: React.FC = () => {
  const phones = useAppSelector((state) => state.phones);
  return (
    <ul className="phones">
      {phones.map((phone: Phone) => (
        <li key={phone.id}>
          <PhoneCard phone={phone} />
        </li>
      ))}
    </ul>
  );
};
