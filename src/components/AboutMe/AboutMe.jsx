import React from 'react'
import './aboutMe.css'
import skills from '../../utils/skills'
import Li from '../../commons/Li'

export default function AboutMe() {
    
  return (
    <section style={{ backgroundColor: "#141414" }}>
      <article className="container mb-6">
        <div className="columns is-multiline">
          <div className="column is-6 has-text-centered mt-6">
            <h1 className="has-text-info is-size-1 has-text-weight-bold mb-6">
              SOBRE MÍ
            </h1>
            <p className="has-text-white has-text-justified textMe is-size-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam consequatur eveniet consequuntur, iure et blanditiis
              voluptatem debitis quas totam! Possimus dicta esse nam laudantium
              qui magnam, odio maxime et asperiores amet quod architecto?
              Laborum eum alias maiores doloremque debitis enim id porro odio
              voluptate, nam iste mollitia sapiente rem, ducimus hic nulla?
              Itaque alias fugiat, ducimus tenetur aut voluptatibus vitae.
            </p>
          </div>
          <div className="column is-6 has-text-centered mt-6">
            <h1 className="has-text-white is-size-1 has-text-weight-bold mb-6">
              MIS <span className="has-text-info">HABILIDADES</span>
            </h1>
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
      </article>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L288,128L576,64L864,192L1152,32L1440,128L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
