import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faFilePdf} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import cv from "../../utils/nicolas-requejocv.pdf"

export default function Home() {
  
  return (
    <section className="home">
      <section>
        <span className="stars"></span>
        <span className="stars"></span>
        <span className="stars"></span>
        <span className="stars"></span>
        <span className="stars"></span>
        <span className="stars"></span>
        <span className="stars"></span>
        <span className="stars"></span>
        <span className="stars"></span>
        <span className="stars"></span>
      </section>
      <div className="columns is-multiline">
        <div className="column is-12">
          <div className="is-flex is-flex-direction-column is-align-items-center algo">
            <Fade right>
              <span className="has-text-info is-size-3 has-text-weight-bold">
                HOLA, SOY
              </span>
            </Fade>
            <Fade top cascade>
              <h1 className="has-text-white name has-text-centered">
                Nicolás Requejo
              </h1>
            </Fade>
            <Fade right>
              <span className="has-text-white is-family-code has-text-weight-light is-size-5 mt-5">
                | FULL-STACK WEB DEVELOPER |
              </span>
            </Fade>

            <div className="is-flex is-flex-direction-row">
              <Zoom>
                <button
                  style={{ borderRadius: "23px" }}
                  className="button is-medium  has-text-primary-light mt-6 mr-3"
                  onClick={() => {
                    document
                      .getElementById("about")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  MÁS SOBRE MI{" "}
                  <FontAwesomeIcon icon={faAngleDown} className="ml-3" />
                </button>
              </Zoom>
              <Zoom>
                <a
                  style={{ borderRadius: "23px" }}
                  className="button is-medium  has-text-primary-light mt-6"
                  href={cv}
                  target="blank"
                >
                  CURRICULUM
                  <FontAwesomeIcon icon={faFilePdf} className="ml-3" />
                </a>
              </Zoom>
            </div>
          </div>
        </div>

        <div className="column is-12 redes">
          <Jump forever={true} duration={2000}>
            <div className="has-text-centered">
              <a
                href="https://www.linkedin.com/in/victor-nicolas-requejo/"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="has-text-white ml-3"
                  size="2x"
                />
              </a>
              <a href="https://www.instagram.com/nicorequejo96/" target="blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="has-text-white ml-6"
                  size="2x"
                />
              </a>
              <a href="https://github.com/NicolasRequejo" target="blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="has-text-white ml-6"
                  size="2x"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+543512161073"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="has-text-white ml-6"
                  size="2x"
                />
              </a>
            </div>
          </Jump>
        </div>
      </div>
    </section>
  );
}
