import React from "react";
import avatar from "../../public/Assets/avatar.png";
import { AboutScreen } from "../Components/AboutScreen.jsx";
import { ContactScreen } from "./ContactScreen";
import { ExperinceScreen } from "./ExperinceScreen";
import { PortfolioScreen } from "./PortfolioScreen";
import curriculum from "../../public/Assets/curriculum.pdf";
import "../Styles/main.scss";

export const HomeScreen = () => {
  return (
    <>
      <div className="home__screen" id="home__screen">
        <div className="home__item1"> hola yo soy </div>
        <div className="home__item2">
          {" "}
          <h1> edgar joaquín flores </h1>{" "}
        </div>
        <div className="home__item3">
          {" "}
          <p>react web developer</p>{" "}
        </div>
        <div className="home__item4">
          {" "}
          <button className="btn">
            {" "}
            <a href={curriculum} target="_blank" rel="noopener noreferrer">
              {" "}
              download CV{" "}
            </a>
          </button>{" "}
        </div>
        <div className="home__item5">
          {" "}
          <img src={avatar} alt="avatar" />{" "}
        </div>
      </div>

      <AboutScreen />
      <ExperinceScreen />
      <PortfolioScreen />
      <ContactScreen />
    </>
  );
};
