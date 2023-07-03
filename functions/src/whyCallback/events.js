const selectDOMElement = (selector) => document.querySelector(selector);

const handleClick = (event) => {
  // console.log("🚀 ~ file: events.js:5 ~ handleClick ~ event:", event);
  window.alert("💥 Image with button role has been clicked");
};

const $image = selectDOMElement("img");

$image.role = "button";
$image.addEventListener("click", (event) => handleClick(event));
