import React from "react";
import emailjs from "@emailjs/browser";
import image from "../../utils/images/img-01.png";
import "./contact.css";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";
import swal from "sweetalert";


export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_npddkzg",
        "template_q9aythp",
        e.target,
        "aktGiZiTxctkK-awg"
      )
      .then(
        (result) => {
          swal("Mensaje enviado!", "Gracias por ponerte en contacto!", "success");
          console.log(result);
          console.log(e.target)
        },
        (error) => {
          alert("Oh oh! Hubo un error");
          console.log(error);
        }
      );

      e.target = ""
  };

  return (
    <div
      className="container mt-6"
      style={{ paddingBottom: "62px" }}
    >
      <Zoom>
        <div className="columns is-multiline cardy">
          <div className="column is-12">
            <Fade top cascade delay={750}>
              <h1
                className="has-text-centered has-text-info is-size-2 mb-6 has-text-weight-bold"
                style={{ borderBottom: "solid" }}
              >
                Contactame
              </h1>
            </Fade>
          </div>
          <div className="column is-5 mt-6" style={{ overflow: "hidden" }}>
            <Fade
              left
              forever={true}
              duration={3000}
              delay={750}
              style={{ margin: "inherit" }}
            >
              <img src={image} alt="Mail" />
            </Fade>
          </div>
          <div className="column is-7 mt-6">
            <form onSubmit={sendEmail}>
              <div className="field">
                <Fade top cascade delay={750}>
                  <label
                    htmlFor="name"
                    className="label has-text-info mb-3 is-size-4 has-text-weight-bold"
                  >
                    Nombre
                  </label>
                </Fade>
                <div className="control">
                  <input
                    className="inputt"
                    type="text"
                    id="name"
                    placeholder="Tu nombre ..."
                    name="user_name"
                  />
                </div>
              </div>

              <div className="field">
                <Fade top cascade delay={750}>
                  <label
                    htmlFor="email"
                    className="label has-text-info mb-3 is-size-4 has-text-weight-bold"
                  >
                    Email
                  </label>
                </Fade>
                <div className="control">
                  <input
                    type="email"
                    className="inputt"
                    id="email"
                    placeholder="Tu email ..."
                    name="user_email"
                  />
                </div>
              </div>

              <div className="field ">
                <Fade top cascade delay={750}>
                  <label
                    htmlFor="message"
                    className="has-text-info mb-3 is-size-4 has-text-weight-bold"
                  >
                    Mensaje
                  </label>
                </Fade>
                <div className="control">
                  <textarea
                    className="inputt"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Hola nico, me comunico ..."
                    name="user_message"
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="buttonContact">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
