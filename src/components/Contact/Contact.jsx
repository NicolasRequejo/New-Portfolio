import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import image from "../../utils/images/img-01.png";
import "./contact.css";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";
import swal from "sweetalert";

export default function Contact() {
  const form = useRef();
  const user_name = useRef();
  const user_email = useRef();
  const user_message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      user_name.current.value === "" ||
      user_email.current.value === "" ||
      user_message.current.value === ""
    ) {
      swal(
        "Por favor, completa todos los datos para ponerte en contacto!",
        "Gracias!",
        "error"
      );
    } else {
      emailjs
        .sendForm(
          "service_npddkzg",
          "template_q9aythp",
          form.current,
          "aktGiZiTxctkK-awg"
        )
        .then(
          (result) => {
            swal(
              "Mensaje enviado!",
              "Gracias por ponerte en contacto!",
              "success"
            );
            user_email.current.value = "";
            user_name.current.value = "";
            user_message.current.value = "";
          },
          (error) => {
            swal("oh oh, hubo un error!", "Contactame por Linkedin!", "error");
          }
        );
    }
  };

  return (
    <div
      className="container mt-6"
      style={{ paddingBottom: "62px" }}
      id="contact"
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
            <form ref={form} onSubmit={sendEmail}>
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
                    ref={user_name}
                    className="inputt"
                    type="text"
                    id="name"
                    maxLength="30"
                    placeholder="Tu nombre ..."
                    name="user_name"
                    // onChange={handleChange}
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
                    ref={user_email}
                    type="email"
                    className="inputt"
                    id="email"
                    maxLength="35"
                    placeholder="Tu email ..."
                    name="user_email"
                    // onChange={handleChange}
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
                    ref={user_message}
                    className="inputt"
                    id="message"
                    cols="30"
                    rows="10"
                    maxLength="300"
                    placeholder="Hola nico, me comunico ..."
                    name="user_message"
                    // onChange={handleChange}
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
