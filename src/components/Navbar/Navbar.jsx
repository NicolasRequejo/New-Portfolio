import React, { useState } from "react";
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const[burgerState,setBurgerState]= useState(true)
  return (
    <nav className="navbar is-transparent position">
      <div className="navbar-item has-dropdown ">
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
        <div
          className="navbar-dropdown is-boxed downdrop"
          style={{ display: burgerState ? "none" : "block" }}
        >
          <a
            className="navbar-item has-text-white"
            href="https://bulma.io/documentation/overview/start/"
          >
            Overview
          </a>
          <a
            className="navbar-item has-text-white"
            href="https://bulma.io/documentation/overview/modifiers/"
          >
            Modifiers
          </a>
          <a
            className="navbar-item has-text-white"
            href="https://bulma.io/documentation/columns/basics/"
          >
            Columns
          </a>
        </div>
      </div>
    </nav>
  );
}
