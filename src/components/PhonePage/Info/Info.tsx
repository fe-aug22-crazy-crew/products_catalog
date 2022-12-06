import React from 'react';
import './Info.scss';

export const Info: React.FC = () => {
  return (
    <section className="info">
      <article className="info__article">
        <h3 className="info__title">About</h3>

        <div className="info__paragraph">
          <h4 className="info__subtitle">And then there was Pro</h4>

          <p className="info__text">
            A transformative triple‑camera system that adds tons of capability
            without complexity. <br />
            <br />
            An unprecedented leap in battery life. And a mind‑blowing chip that
            doubles down on machine learning and pushes the boundaries of what a
            smartphone can do. Welcome to the first iPhone powerful enough to be
            called Pro.
          </p>
        </div>

        <div className="info__paragraph">
          <h4 className="info__subtitle">Camera</h4>

          <p className="info__text">
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone. Capture upto
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest‑quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </p>
        </div>

        <div className="info__paragraph">
          <h4 className="info__subtitle">
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h4>

          <p className="info__text">
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extende dynamic range and cinematic
            video stabilization — all at 60 fps. You get more creative control,
            too, with four times more scene and powerful new editing tools to
            play with
          </p>
        </div>
      </article>

      <article className="info__article">
        <h3 className="info__title info__title--specs">Tech specs</h3>

        <ul className="info__list">
          <li className="info__item">
            <p className="info__property">Screen</p>
            <p className="info__value">6.5” OLED</p>
          </li>

          <li className="info__item">
            <p className="info__property">Resolution</p>
            <p className="info__value">2688x1242</p>
          </li>

          <li className="info__item">
            <p className="info__property">Processor</p>
            <p className="info__value">Apple A12 Bionic</p>
          </li>

          <li className="info__item">
            <p className="info__property">RAM</p>
            <p className="info__value">3 GB</p>
          </li>

          <li className="info__item">
            <p className="info__property">Built in memory</p>
            <p className="info__value">64 GB</p>
          </li>

          <li className="info__item">
            <p className="info__property">Camera</p>
            <p className="info__value">12 Mp + 12 Mp + 12 Mp (Triple)</p>
          </li>

          <li className="info__item">
            <p className="info__property">Zoom</p>
            <p className="info__value">Optical, 2x</p>
          </li>

          <li className="info__item">
            <p className="info__property">Cell</p>
            <p className="info__value">GSM, LTE, UMTS</p>
          </li>
        </ul>
      </article>
    </section>
  );
};
