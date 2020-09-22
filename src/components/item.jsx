import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";

class ItemSelector extends Component {
  state = {
    minimum: this.props.product.minimum || 1, //Static variable that sets a minimum
    quantity: this.props.product.minimum || 1, //gets changed by the function in QP
    price: this.props.product.price,
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
          <h6>
            <span className="priceTxt">
              Price: ${this.props.product.price} each
            </span>
          </h6>
        </div>

        <div>
          <QuantityPicker
            value={this.state.quantity}
            minimum={this.state.minimum}
            onValueChange={(qnty) => this.handleQuantityChange(qnty)}
          ></QuantityPicker>
          <h6 className="total">
            Total:
            <span className="totalTxt">
              {" "}
              ${this.props.product.price * this.state.quantity}
            </span>
          </h6>
          <button className="btn btn-primary btn-add">
            <i class="fa fa-shopping-cart cart" aria-hidden="true"></i>
            <span className="cartTxt">Add to cart</span>
          </button>
        </div>
      </div>
    );
  }
  handleQuantityChange = (qnty) => {
    console.log("Quantity:" + qnty);
    this.setState({ quantity: qnty });
  };
}

export default ItemSelector;

/*

homework:

create an item 
a div with an image and price
quantity picker

*/
