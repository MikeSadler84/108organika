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
          width="100px"
          height="100px"
        ></img>
        <div className="cartInfo">
          <label>{this.props.product.product.title}</label>
        </div>
        <div className="cartPrice">
          <label>Price: ${this.props.product.product.price}</label>
        </div>
        <div className="cartQuantity">
          <label>Quantity: {this.props.product.quantity}</label>
        </div>
        <div className="cartTotal">
          <label>
            Total: $
            {this.props.product.quantity * this.props.product.product.price}
          </label>
        </div>
        <button onClick={this.removeProduct} className=" btn-danger cartButton">
          <i className="far fa-trash"></i>
        </button>
      </div>
    );
  }
  removeProduct = () => {
    console.log("Remove");
  };
}

export default CartItem;
