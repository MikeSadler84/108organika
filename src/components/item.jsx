import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";

class ItemSelector extends Component {
  state = {
    quantity: 1,
    price: 60,
    title: "Monster Hunter World",
  };
  render() {
    return (
      <div className="item">
        <img
          src={"/img/products/" + this.props.product.image}
          alt="images for our catalog"
        ></img>
        <h4>{this.props.product.title}</h4>
        <div>
          <h5>Total Price:</h5>
          <h6>${this.props.product.price}</h6>
        </div>

        <div>
          <QuantityPicker></QuantityPicker>
          <button className="btn btn-primary btn-add">Add</button>
        </div>
      </div>
    );
  }
}

export default ItemSelector;

/*

homework:

create an item 
a div with an image and price
quantity picker

*/
