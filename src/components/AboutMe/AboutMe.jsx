import React from "react";
import "./aboutMe.css";
import skills from "../../utils/skills";
import Li from "../../commons/Li";
import Fade from "react-reveal/Fade";

export default function AboutMe() {
  return (
    <section
      style={{
        backgroundColor: "#141414",
        marginBottom: "-10px",
        paddingTop: "5%",
      }}
      id="about"
    >
      <article className="container">
        <div className="columns is-multiline">
          <Fade left bottom cascade >
            <div className="column is-6 has-text-centered mt-6">
              <div className="cardy">
                <Fade top cascade delay={500}>
                  <h1
                    className="has-text-info is-size-1 has-text-weight-bold mb-6"
                    style={{ borderBottom: "solid" }}
                  >
                    SOBRE MI
                  </h1>
                </Fade>

                <p className="has-text-white has-text-left textMe is-size-4">
                 
                  El que hace que las cosas funcionen: Soy Nicolás Requejo,
                  desarrollador fullstack.
                  <br /> 
                  <br /> 
                  Me gusta hacer que las cosas
                  funcionen, ya sea creando algo nuevo o mejorando algo que
                  ya existe. He trabajado en varios proyectos, principalmente
                  en equipos ágiles, y siempre me esfuerzo por mantener las
                  cosas simples y eficientes. Soy amigable, me gusta trabajar
                  en equipo y siempre tengo una idea para resolver cualquier
                  problema.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right top cascade>
            <div className="column is-6 has-text-centered mt-6">
              <div className="cardy">
                <Fade left top cascade delay={500}>
                  <h1
                    className="has-text-info is-size-1 has-text-weight-bold mb-6"
                    style={{ borderBottom: "solid" }}
                  >
                    MIS HABILIDADES
                  </h1>
                </Fade>

                <div
                  className="containerSkill columns is-multiline is-mobile"
                  style={{ marginLeft: "auto" }}
                >
                  {skills.map((e, i) => {
                    return <Li skills={e} key={i} />;
                  })}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </article>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f2f2f2"
          fill-opacity="1"
          d="M0,96L288,128L576,64L864,192L1152,32L1440,128L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8e8e8"
          fillOpacity="1"
          d="M0,160L34.3,181.3C68.6,203,137,245,206,245.3C274.3,245,343,203,411,202.7C480,203,549,245,617,234.7C685.7,224,754,160,823,149.3C891.4,139,960,181,1029,208C1097.1,235,1166,245,1234,234.7C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
