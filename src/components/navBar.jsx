// creating a react file end with .jsx instead of js

import React, { Component } from "react"; // imrc is the shortcut

//cc is the shortcut for this

class NavBar extends Component {
  state = {};
  render() {
    return <h3 className="menu">Menu placeholder</h3>;
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
