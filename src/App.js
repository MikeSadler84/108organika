import React from "react";
import "./App.css";
import NavBar from "./components/navBar.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import FooterBar from "./components/footerBar";
import Catalog from "./components/catalog";
import Home from "./components/home";
import Todo from "./components/todo";
import Cart from "./components/cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    //Can only be one element using React.Fragment puts everything into one element
    <BrowserRouter>
      <NavBar></NavBar>

      <div className="App container wrap p-0">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/catalog" component={Catalog}></Route>
          <Route path="/todo" component={Todo}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </div>
      <FooterBar></FooterBar>
    </BrowserRouter>
  );
}

export default App;
