import React, { Component } from "react";
import ItemSelector from "./item";
import ItemService from "./../services/itemService";
import "./catalog.css";

class Catalog extends Component {
  state = {
    items: [],
  };
  render() {
    return (
      <div className="catalogPage">
        <h2 className="catTitle">Our amazing catalog</h2>
        <div className="categories"></div>
        <div className="products">
          {this.state.items.map((i) => (
            <ItemSelector key={i.id} product={i}></ItemSelector>
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    // perfect place to get data from server / database / AJAX - outside of the render
    let service = new ItemService();
    const data = service.getProducts();

    this.setState({ items: data });
  }
}

export default Catalog;
