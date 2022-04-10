//Importing REACT dependencies
import React from "react";
import ReactDOM from "react-dom";
//------------------------------------------------------------------
//Importing Custom Components
import Heading from "./Heading";
import List from "./List";
//------------------------------------------------------------------
function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

//Export the Custom Component to be used in index.js
export default App;
