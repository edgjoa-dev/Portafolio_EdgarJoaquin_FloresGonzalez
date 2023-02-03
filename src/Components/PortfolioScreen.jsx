import React from "react";
import { CardList } from "../Card/CardList";
import "../Styles/main.scss";

export const PortfolioScreen = () => {
  return (
    <div className="port__screen" id="portfolio__screen">
      <h1>Portfolio</h1>
      <h4>Proyectos</h4>

      <CardList publisher="projects" />
    </div>
  );
};
