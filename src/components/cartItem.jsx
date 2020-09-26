import React, { Component } from "react";
import "./cartItem.css";

class CartItem extends Component {
  state = {};
  render() {
    return (
      <div className="cartItem">
        <img
          className="cartImg"
          src={"/img/products/" + this.props.product.product.image}
          alt="product"
        ></img>
        <div className="cartInfo">
          <label>Description: {this.props.product.product.title}</label>
          <label>Price: {this.props.product.product.price}</label>
        </div>
        <div className="cartQuantity">
          <label>Quantity: {this.props.product.quantity}</label>
        </div>
        <div className="cartTotal">
          <label>
            Total:{" "}
            {this.props.product.quantity * this.props.product.product.price}
          </label>
        </div>
        <button onClick={this.removeProduct} className="cartButton">
          <i className="fad fa-trash-alt"></i>
        </button>
      </div>
    );
  }
  removeProduct = () => {
    console.log("Remove");
  };
}

export default CartItem;
