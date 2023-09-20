import particulars from "../data/particulars.js";
import professionals from "../data/professionals.js";

/**
 * Crea un nodo con el texto "🚀 DOM methods 🚀" y añádelo al elemento h1
 */
const $h1 = document.querySelector("#header1");
const headerTextElement = document.createTextNode("🚀 DOM METHODS 🚀");
// $h1.innerHTML = "🚀 DOM methods 🚀";
$h1.appendChild(headerTextElement);

/**
 * Crea una sección para profesionales y una para particularese insértalas en el nodo 'main' del DOM.
 *  → las dos secciones se identifica con la clase 'section__wrapper'
 */
const $mainWrapper = document.querySelector(".wrapper");

const professionalsSectionElement = document.createElement("section");
professionalsSectionElement.classList.add("section__wrapper");

const particularsSectionElement = document.createElement("section");
particularsSectionElement.classList.add("section__wrapper");

$mainWrapper.append(professionalsSectionElement, particularsSectionElement);

/**
 * Inserta una cabecera de 2 nivel a cada sección
 *  → usa un método para seleccionar todas las secciones de una vez
 *  → cada cabecera se identifica con la clase 'subheader'
 *  → la cabecera de profesionales con el texto 'Professionals'
 *  → la cabecera de particulares con el texto 'Particulars'
 */
const $sections = document.querySelectorAll(".section__wrapper");

const professionalsHeaderElement = document.createElement("h2");
const professionalsHeaderTextElement = document.createTextNode("Professionals");

professionalsHeaderElement.appendChild(professionalsHeaderTextElement);
professionalsHeaderElement.classList.add("subheader");
$sections[0].appendChild(professionalsHeaderElement);

const particularsHeaderElement = document.createElement("h2");
const particularsHeaderTextElement = document.createTextNode("Particulars");

particularsHeaderElement.appendChild(particularsHeaderTextElement);
particularsHeaderElement.setAttribute("class", "subheader");
$sections[1].appendChild(particularsHeaderElement);

/**
 * Inserta una lista desordenada a cada sección
 *  → la lista de profesionales se identifica con la clase 'list professionals__list'
 *  → la lista de particularses se identifica con la clase 'list particulars__list'
 *  → las dos listas se identifican también con la clase 'list'
 */

const professionalsListElement = document.createElement("ul");
professionalsListElement.classList.add("list", "professionals");
$sections[0].appendChild(professionalsListElement);

const particularsListElement = document.createElement("ul");
particularsListElement.classList.add("list", "particulars");
$sections[1].appendChild(particularsListElement);

/**
 * Crea un item de lista (<li>) para lista de profesionales y otro para lista de particulares
 *  → Descomenta los imports para traer los datos de profesionales y particulares
 *  → Cada item de la lista debe contener
 *    → el avatar del primer profesional/particular en un elemento de imagen
 *      → el elemento debe definir el valor del atributo src
 *      → el elemento debe ser identificado con la clase 'list__avatar'
 *    → el nombre del primer profesional/particular en un elemento de párrafo de nivel 3
 *      → el elemento debe ser identificado con la clase 'list__name'
 */

// selectors
const $professionalsList = document.querySelector(".professionals");
const $particularsList = document.querySelector(".particulars");

// professional li
const firstProfessionalsListElement = document.createElement("li");

// professional avatar
const firstProfessionalsAvatarElement = document.createElement("img");
firstProfessionalsAvatarElement.setAttribute("src", professionals[0].avatar);
firstProfessionalsListElement.appendChild(firstProfessionalsAvatarElement);

// professional name
const firstProfessionalsNameElement = document.createElement("h3");

const firstProfessionalsNameTextElement = document.createTextNode(
  `${professionals[0].firstName} ${professionals[0].lastName}`
);

firstProfessionalsNameElement.appendChild(firstProfessionalsNameTextElement);
firstProfessionalsListElement.appendChild(firstProfessionalsNameElement);

$professionalsList.appendChild(firstProfessionalsListElement);

// particular li
const firstParticularsListElement = document.createElement("li");

// particular name
const firstParticularsNameElement = document.createElement("h3");

const firstParticularsNameTextElement = document.createTextNode(
  `${particulars[0].firstName} ${particulars[0].lastName}`
);

firstParticularsNameElement.appendChild(firstParticularsNameTextElement);
firstParticularsListElement.appendChild(firstParticularsNameElement);
$particularsList.appendChild(firstParticularsListElement);
