const sneakers = require("./images/plataforma-sneakers.png");
const movies = require("./images/nrmovies.png");
const turnero = require("./images/turneroweb.png");
const mimo = require("./images/mimo.png");
const projects = [
  {
    name: "Mimoweb",
    description:
      "Mimo web es una red social erótica que está en proceso de desarrollo, en este proyecto participo principalmente haciendo cambios front-end en distintas vistas siguiendo un diseño.",
    stack: [
      "HTML5",
      "CSS3",
      "SASS",
      "Vue",
      "Vuex",
      "Bulma",
      "PHP",
      "Web socket",
    ],
    img: mimo,
    alt: "mimoweb",
    url: null,
    gith: null,
  },
  {
    name: "TurnosWEB",
    description:
      "Aplicación web para reserva de turnos, como proyecto grupal desarrollado para la empresa CRUCE. Durante 4 semanas estuve a cargo del desarrollo Front-end, trabajando con React, Context, Material UI.",
    stack: ["HTML5", "CSS3", "React", "Axios", "Context", "MaterialUi"],
    img: turnero,
    alt: "Turnos Web",
    url: "https://turnosweb-project.netlify.app/",
    gith: "https://github.com/santiagocata/front-cruce",
  },
  {
    name: "Plataforma Sneakers",
    description:
      "Plataforma Sneakers es un E-commerce hecho desde cero en grupo como práctica para el coding-Bootcamp de Plataforma 5, cumple con las funcionalidades básicas de una E-commerse. Mi rol principal fue front-end con React desarrollando las vistas pincipales como lo son, el paginado de productos, vista de un producto en particular, funcionalidades de dejar y ver reviews,      buscador, entre otras cosas.",
    stack: ["HTML5", "CSS3", "React", "Redux", "Axios", "Bulma"],
    img: sneakers,
    alt: "Plataforma Sneakers",
    url: null,
    gith: "https://github.com/NicolasRequejo/E-commerce",
  },
  {
    name: "NR Movies",
    description:
      "NRMovies es un proyecto de práctica que consiste en la creación de una Página de peliculas desde c consumiendo la API TMDB (the movie data base) en el que me desem como Full Stack Dev. La idea principal es poner en práctic visto en el módulo nivelatorio y el módulo de formación.",
    stack: [
      "HTML5",
      "CSS3",
      "vanilla Js",
      "React",
      "Contex",
      "Axios",
      "Bulma",
      "NodeJs",
      "Express",
      "Sequelize",
      "Postgres",
    ],
    img: movies,
    alt: "NRMovies",
    url: null,
    gith: "https://github.com/NicolasRequejo/TMDB",
  },
];



export default projects