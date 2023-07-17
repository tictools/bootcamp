export const $getElementBy = (selector) => document.querySelector(selector);

export const $createElement = (tag) => document.createElement(tag);

export const $appendChild = ($parent, $child) => $parent.appendChild($child);

export const $createText = (text) => document.createTextNode(text);

export const $addClassTo = ($element, className) =>
  $element.classList.add(className);
