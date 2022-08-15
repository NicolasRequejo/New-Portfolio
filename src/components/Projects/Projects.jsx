import React from "react";
import "./projects.css";
import Card from "./Card";
import projects from "../../utils/projects";
import Fade from "react-reveal/Fade";
import Carousel from "react-elastic-carousel";



export default function Projects() {
  return (
    <section style={{ backgroundColor: "#e8e8e8" }} id="projects">
      <div className=" container has-text-centered">
        <Fade top right cascade>
          <h1
            className="is-size-1 has-text-weight-bold has-text-info mb-6"
            style={{ borderBottom: "solid" }}
          >
            Proyectos
          </h1>
        </Fade>

        <div className="rec rec-arrow">
          <Carousel verticalMode itemsToShow={2}>
            {projects.map((project, i) => {
              return i % 2 === 0 ? (
                <Fade top right key={i + 1} delay={750}>
                  <Card project={project} key={i} />
                </Fade>
              ) : (
                <Fade top left key={i + 1} delay={750}>
                  <Card project={project} key={i} />
                </Fade>
              );
            })}
          </Carousel>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginBottom: "-10px" }}
      >
        <path
          fill="#141414"
          fillOpacity="1"
          d="M0,160L34.3,181.3C68.6,203,137,245,206,245.3C274.3,245,343,203,411,202.7C480,203,549,245,617,234.7C685.7,224,754,160,823,149.3C891.4,139,960,181,1029,208C1097.1,235,1166,245,1234,234.7C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
