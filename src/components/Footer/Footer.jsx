import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="has-text-weight-bold">
          Copyright © 2022{" "}
          <a
            href="https://www.linkedin.com/in/victor-nicolas-requejo/"
            target="blank"
            className="has-text-info has-text-weight-bold"
          >
            Nicolas Requejo
          </a>
          , todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer