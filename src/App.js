import React from "react";
import "./App.css";
import NavBar from "./components/navBar.jsx";
import QuantityPicker from "./components/quantityPicker.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import FooterBar from "./components/footerBar";
import ItemSelector from "./components/item";

function App() {
  return (
    //Can only be one element using React.Fragment puts everything into one element
    <React.Fragment>
      <NavBar></NavBar>
      <div className="App container-fluid">
        <h1>Hello React!!</h1>
        <QuantityPicker></QuantityPicker>
        <ItemSelector></ItemSelector>
      </div>
      <FooterBar></FooterBar>
    </React.Fragment>
  );
}

export default App;
