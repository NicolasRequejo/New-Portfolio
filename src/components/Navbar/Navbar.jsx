import React, { useState } from "react";
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const[burgerState,setBurgerState]= useState(true)
  return (
    <>
      <nav className="navbar is-transparent position">
        <div class="dropdown">
          <button
            className="icon-style"
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
            class="dropdown-content"
            style={{ display: burgerState ? "none" : "block" }}
          >
            <a
              className="navbar-item has-text-info"
              onClick={() => {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
                setBurgerState(!burgerState);
              }}
            >
              SOBRE MI
            </a>
            <a
              className="navbar-item has-text-info"
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
                setBurgerState(!burgerState);
              }}
            >
              PROJECTS
            </a>
            <a
              className="navbar-item has-text-info"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                setBurgerState(!burgerState);
              }}
            >
              CONTACTO
            </a>
          </div>
        </div>
        {/* <div className="navbar-item has-dropdown ">
          <button
            className="navbar-link is-arrowless"
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
        </div> */}
      </nav>
      {/* <div
        className="navbar-dropdown is-boxed downdrop"
        style={{ display: burgerState ? "none" : "block" }}
      >
        <a
          className="navbar-item has-text-white"
          onClick={() => {
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          SOBRE MI
        </a>
        <a
          className="navbar-item has-text-white"
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          PROJECTS
        </a>
        <a
          className="navbar-item has-text-white"
          href="https://bulma.io/documentation/columns/basics/"
        >
          Columns
        </a>
      </div> */}
    </>
  );
}
