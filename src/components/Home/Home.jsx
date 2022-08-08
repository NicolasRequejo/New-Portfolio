import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  //const element = <FontAwesomeIcon icon={faCoffee} />;
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
            <span className="has-text-info is-size-3 has-text-weight-bold">
              HOLA, SOY
            </span>
            <h1 className="has-text-white name has-text-centered">
              Nicolás Requejo
            </h1>
            <span className="has-text-white is-family-code has-text-weight-light is-size-5 mt-5">
              | FULL-STACK WEB DEVELOPER |
            </span>
            <button className="button is-medium is-responsive has-text-primary-light mt-6">
              MÁS SOBRE MI{" "}
              <FontAwesomeIcon icon={faAngleDown} className="ml-3" />
            </button>
          </div>
        </div>
        <div className="column is-12" style={{marginTop: "150px"}}>
          <div className="has-text-centered">
            <a
              href="https://www.linkedin.com/in/victor-nicolas-requejo-882a63222/"
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
        </div>
      </div>
    </section>
  );
}
