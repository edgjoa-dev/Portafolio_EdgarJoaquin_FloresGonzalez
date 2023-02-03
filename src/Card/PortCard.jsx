import React from "react";
import { imgsWorks } from "../Helpers/worksImages";
import "../Styles/main.scss";

export const PortCard = ({ id, title, text, url }) => {
  return (
    <div className="container__card box__shadow">
      <div className="card__img">
        <img src={imgsWorks(`./${id}.png`)} alt={title} />
      </div>

      <div className="card__info">
        <h2>{title}</h2>
        <p className="info__text">{text}</p>
      </div>

      <div className="card__link">
        <a href={url} target="_blank" rel="noreferrer noopener">
          ver +
        </a>
      </div>
    </div>
  );
};
