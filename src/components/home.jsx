import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Organika</h1>
        <p className="lead">
          We sell the highest quality produce at the cheapest prices!
        </p>
        <hr className="my-4" />

        <p className="lead">
          <Link
            className="btn btn-primary btn-lg catalog-btn"
            to="/catalog"
            role="button"
          >
            Check out our catalog
          </Link>
        </p>
      </div>
    );
  }
}

export default Home;
