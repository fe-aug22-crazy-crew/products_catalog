/* eslint-disable no-shadow */
import React from 'react';
import { PhoneData } from '../../../types/PhoneData';
import './Info.scss';

type Props = {
  phone: PhoneData;
};

export const Info: React.FC<Props> = ({ phone }) => {
  const {
    screen,
    cell,
    camera,
    zoom,
    ram,
    processor,
    resolution,
    capacity,
    description,
  } = phone;

  // const about = description[0];

  return (
    <section className="info">
      <article className="info__article">
        <h3 className="info__title">About</h3>

        <div className="info__paragraph">
          <h4 className="info__subtitle">{description[0].title}</h4>

          <p className="info__text">{description[0].text}</p>
        </div>

        <div className="info__paragraph">
          <h4 className="info__subtitle">{description[1].title}</h4>

          <p className="info__text">{description[1].text}</p>
        </div>

        <div className="info__paragraph">
          <h4 className="info__subtitle">{description[2].title}</h4>

          <p className="info__text">{description[1].text}</p>
        </div>
      </article>

      <article className="info__article">
        <h3 className="info__title info__title--specs">Tech specs</h3>

        <ul className="info__list">
          <li className="info__item">
            <p className="info__property">Screen</p>
            <p className="info__value">{screen}</p>
          </li>

          <li className="info__item">
            <p className="info__property">Resolution</p>
            <p className="info__value">{resolution}</p>
          </li>

          <li className="info__item">
            <p className="info__property">Processor</p>
            <p className="info__value">{processor}</p>
          </li>

          <li className="info__item">
            <p className="info__property">RAM</p>
            <p className="info__value">{ram}</p>
          </li>

          <li className="info__item">
            <p className="info__property">Built in memory</p>
            <p className="info__value">{capacity}</p>
          </li>

          <li className="info__item">
            <p className="info__property">Camera</p>
            <p className="info__value">{camera}</p>
          </li>

          <li className="info__item">
            <p className="info__property">Zoom</p>
            <p className="info__value">{zoom}</p>
          </li>

          <li className="info__item">
            <p className="info__property">Cell</p>
            <p className="info__value">{cell}</p>
          </li>
        </ul>
      </article>
    </section>
  );
};
