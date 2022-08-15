import React from 'react'



export default function Card({project}) {
  
  return (
    <div className="columns cardd mb-4 mt-6">
      <div className="column is-5 ">
        <figure className="image is-5by4">
          <img src={project.img} alt={project.alt} className="portImage" />
        </figure>
      </div>
      <div className="column is-7 project-card-info has-text-left">
        <h3 className="has-text-info project-card-title ">{project.name}.</h3>

        <p className="project-card-description ">{project.description}</p>

        <p className="project-card-stack">Stack:</p>

        <ul className="tags">
          {project.stack.map((tec, i) => {
            return <li key={i}>{tec}</li>;
          })}
        </ul>

        {project.url === null ? (
          ""
        ) : (
          <a href={project.url} className="has-text-right" target="blank">
            sitioweb
          </a>
        )}
        {project.gith === null ? (
          ""
        ) : (
          <a href={project.gith} className="has-text-right ml-3" target="blank">
            github
          </a>
        )}
      </div>
    </div>
  );
}
