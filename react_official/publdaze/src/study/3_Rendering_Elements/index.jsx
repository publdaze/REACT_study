import ReactDOM from "react-dom";

export default function RenderingElements() {
  const element = <div id="RenderingElements">Loading...</div>;

  function tick() {
    const element = (
      <div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById("RenderingElements"));
  }

  setInterval(tick, 1000);
  return element;
}
