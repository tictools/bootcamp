const styleSettings = [
  "background-color: #290000",
  "border-bottom: 2px solid #F0DB4F",
  "border-top: 2px solid #F0DB4F",
  "color:#F0DB4F",
  "font-family: 'JetBrains Mono'",
  "font-size: 16px",
  "margin: 4px 0 24px",
  "padding: 16px 0",
];

const printCustomHeaderInConsole = (message) => {
  const styles = styleSettings.join("; ");
  console.log(`%c${message}`, styles);
};

export default printCustomHeaderInConsole;
