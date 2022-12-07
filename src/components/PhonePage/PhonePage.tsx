import React, { useEffect, useState } from 'react';
import { Info } from './Info/Info';
import { client } from '../../utils/fetchProducts';
import { PhoneData } from '../../types/PhoneData';
import { PhonePageMain } from './PhonePageMain';
// import { Position } from '../Position';

export const PhonePage: React.FC = () => {
  const [phone, setPhone] = useState<null | PhoneData>(null);

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
  }, []);

  if (phone) {
    return (
      <main className="container">
          <Breadcrumbs />
          <PhonePageMain phone={phone}/>
          <Info phone={phone} />
      </main>
    );
  } else {
    return null;
  }
};
