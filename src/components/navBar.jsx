// creating a react file end with .jsx instead of js

import React, { Component } from "react"; // imrc is the shortcut

//cc is the shortcut for this

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
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
