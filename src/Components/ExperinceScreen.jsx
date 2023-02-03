import React from "react";
import "../Styles/main.scss";

export const ExperinceScreen = () => {
  return (
    <div className="experince__screen" id="experience__screen">
      <div className="experince__head">
        <h1 className="experince__title">mi experiencia</h1>
        <p>Mis Hablidades</p>
      </div>

      <div className="experince__grid">
        <div className="expgrid__item box__shadow">
          <h3>Técnologias</h3>
          <div className="item__prop">html</div>
          <div className="item__prop">react</div>
          <div className="item__prop">bootstrap</div>
          <div className="item__prop">JavaScript</div>
          <div className="item__prop">nodejs</div>
          <div className="item__prop">mongo db</div>
          <div className="item__prop">express</div>
        </div>

        <div className="expgrid__item box__shadow">
          <h3>Técnologias</h3>
          <div className="item__prop">github</div>
          <div className="item__prop">css</div>
          <div className="item__prop">sass</div>
          <div className="item__prop">ant-desing</div>
          <div className="item__prop">react-router-domv6</div>
          <div className="item__prop">react-scroll</div>
          <div className="item__prop">react-icons</div>
        </div>
      </div>
    </div>
  );
};
