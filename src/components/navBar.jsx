// creating a react file end with .jsx instead of js

import React, { Component } from "react"; // imrc is the shortcut
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import "./navbar.css";

//cc is the shortcut for this

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/#">
          Organika
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-light my-2 my-sm-0" to="/cart">
              <i class="fa fa-shopping-cart navCart" aria-hidden="true"></i>{" "}
              Cart
              <span class="badge badge-light">4</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

/* 

Advanced ES6 topics - Homework

Arrow functions
Object destructuring 
Spread operator
Array Methods ( filter, map, sort )

*/

/*

object

var dog = {
  name: "Duke",
  age: 1,
  color: "White"
};

object destructuring

var {name, age, color} = dog;


*/

/*

array map

var mapRes = color.map( (item) => {
  return item.toUpperCase();
});

takes everything in the color array and makes the uppercase


*/
