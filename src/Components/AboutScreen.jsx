import React from "react";
import avatar1 from "../../public/Assets/avatar_perfil.png";
import pdl from "../../public/Assets/PDA.pdf";
import "../Styles/main.scss";

export const AboutScreen = () => {
  return (
    <div className="about__screen" id="about__screen">
      <div className="encabezado">acerca de mi</div>

      <p>Sobre Mí</p>

      <div className="info__content">
        <div>
          <img src={avatar1} alt="avatar_about" />
        </div>

        <div className="info__text">
          Desarrollador Web, con amplios conocimientos y experiencia, <br />
          trabajando con tecnologias web como Html, React, Node js, Mongo DB,{" "}
          <br />
          Express, Sass, Css, JavaScript. <br />
          A lo largo de este tiempo, he tenido el privilegio de crear algunos
          proyectos <br />
          propios como aplicaciones webs con React js como tecnología central y
          en <br />
          la que he basado mis desarrollos, los cuales han cultivado un gran{" "}
          <br />
          conocimiento sobre esta tecnología.
        </div>
      </div>

      <div className="grid__item">
        <div className="about__item">
          <div className="title__item">
            <h4>Valores</h4>
          </div>
          <ul className="title__li">
            <li>Reciliencia </li>
            <li>Responsabilidad</li>
            <li>Trabajo en Equipo</li>
            <li>Adaptabilidad</li>
          </ul>
        </div>

        <div className="about__item">
          <div className="title__item">
            <h4>Defectos</h4>
          </div>
          <ul className="title__li">
            <li>Autocritico</li>
            <li>Procrastinar</li>
            <li>Falto de confianza</li>
            <li>Negociación o Ventas</li>
          </ul>
        </div>

        <div className="about__item">
          <div className="title__item">
            <h4>Hobbies</h4>
          </div>
          <ul className="title__li">
            <li>Música </li>
            <li>Ver Películas</li>
            <li>Tecnología</li>
            <li>Viajar</li>
          </ul>
        </div>
      </div>

      <div>
        {" "}
        <button className="btn__pdl">
          {" "}
          <a href={pdl} target="_blank" rel="noopener noreferrer">
            PDA resume{" "}
          </a>{" "}
        </button>{" "}
      </div>
    </div>
  );
};
