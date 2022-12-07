import React, { useEffect, useState } from 'react';
import { Info } from './Info/Info';
import { client } from '../../utils/fetchProducts';
import { PhoneData } from '../../types/PhoneData';
import { PhonePageMain } from './PhonePageMain';
import { Breadcrumbs } from '../Breadcrumbs';

export const PhonePage: React.FC = () => {
  const [phone, setPhone] = useState<null | PhoneData>(null);
  const [update, setUpdate] = useState(1);

  const getPhone = async() => {
    const data = await client.get(
      'phones/' + location.pathname.split('/').slice(-1).join(''),
      'GET',
      null,
    );

    setPhone(data);
  };

  useEffect(() => {
    getPhone();
  }, [update]);

  if (phone) {
    return (
      <main className="container">
        <Breadcrumbs />
        <PhonePageMain phone={phone} setUpdate={setUpdate} />
        <Info phone={phone} />
      </main>
    );
  } else {
    return null;
  }
};
