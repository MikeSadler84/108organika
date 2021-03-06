// creating a react file end with .jsx instead of js

import React, { Component } from "react"; // imrc is the shortcut
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import "./navbar.css";
import { connect } from "react-redux";

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
                Home <span className="sr-only">(current)</span>
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
              <i className="fa fa-shopping-cart navCart" aria-hidden="true"></i>{" "}
              Cart
              <span className="badge badge-light">{this.props.count}</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
// Connects to the state
const mapStateToProps = (state) => {
  return {
    count: state.cart.length, // changed this from state.count to state.cart.length to read what is in the cart
  };
};
export default connect(mapStateToProps, null)(NavBar);

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
