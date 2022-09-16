import React, { useState } from "react";
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const[burgerState,setBurgerState]= useState(true)
  return (
    <>
      <nav className="navbar is-transparent position">
        <div className="dropdown">
          <button
            className="icon-style is-clickable"
            href="#"
            onClick={() => {
              setBurgerState(!burgerState);
            }}
          >
            <FontAwesomeIcon
              icon={faAlignJustify}
              className="has-text-info ml-3"
              size="2x"
            />
          </button>
          <div
            className="dropdown-content"
            style={{ display: burgerState ? "none" : "block" }}
          >
            <span
              className="navbar-item has-text-info is-clickable"
              onClick={() => {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
                setBurgerState(!burgerState);
              }}
            >
              SOBRE MI
            </span>
            <span
              className="navbar-item has-text-info is-clickable"
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
                setBurgerState(!burgerState);
              }}
            >
              PROYECTOS
            </span>
            <span
              className="navbar-item has-text-info is-clickable"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                setBurgerState(!burgerState);
              }}
            >
              CONTACTO
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
