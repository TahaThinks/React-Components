import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
// React allows us to divide sections of the page to Components
// each containig its own HTML,CSS & JS. This way we can use the
// Component in multiple projects.

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
