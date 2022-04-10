import React from "react";
import ReactDOM from "react-dom";
//import the Custom Components from the JSX files created
import Heading from "./Heading";
import List from "./List";
// React allows us to divide sections of the page to Components
// each containig its own HTML,CSS & JS. This way we can use the
// Component in multiple projects.

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
