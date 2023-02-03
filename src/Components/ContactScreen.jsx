import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "../Styles/main.scss";

export const ContactScreen = () => {
  return (
    <div className="contact__screen" id="contact__screen">
      <h1 className="contact__title">Contacto</h1>

      <div className="contact__middle">
        <div className="contact__title">
          {" "}
          <h3>edgar joaquin</h3>{" "}
        </div>
        <div className="contact__social">
          <div className="svg__icon">
            {" "}
            <a
              href="https://github.com/edgjoa-dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <BsGithub />{" "}
            </a>
          </div>
          <div className="svg__icon">
            {" "}
            <a
              href="https://www.instagram.com/flow_joa/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <BsInstagram />{" "}
            </a>
          </div>
          <div className="svg__icon">
            {" "}
            <a
              href="https://www.linkedin.com/in/edgar-joaquin-flores-gonzalez-5132b81a4/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <BsLinkedin />{" "}
            </a>
          </div>
        </div>
        <div className="contact__end">© EdgarFG. All right reserved.</div>
      </div>
    </div>
  );
};
