import React from "react";
import "./App.css";
import NavBar from "./components/navBar.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import FooterBar from "./components/footerBar";
import Catalog from "./components/catalog";

function App() {
  return (
    //Can only be one element using React.Fragment puts everything into one element
    <React.Fragment>
      <NavBar></NavBar>
      <div className="App container-fluid wrap">
        <Catalog></Catalog>
      </div>
      <FooterBar></FooterBar>
    </React.Fragment>
  );
}

export default App;
