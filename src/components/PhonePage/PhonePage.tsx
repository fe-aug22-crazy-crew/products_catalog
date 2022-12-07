import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { Info } from './Info/Info';
import { client } from '../../utils/fetchProducts';
import { PhoneData } from '../../types/PhoneData';

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
      <main>
        <div className="container">
          <Breadcrumbs />
          <Info phone={phone} />
        </div>
      </main>
    );
  } else {
    return null;
  }
};
