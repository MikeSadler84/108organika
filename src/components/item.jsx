import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";
import { connect } from "react-redux";
import { incrementCartCounter, addProduct } from "./../store/actions/index";

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
          <button onClick={this.addCart} className="btn btn-primary btn-add">
            <i className="fa fa-shopping-cart cart" aria-hidden="true"></i>
            <span className="cartTxt">Add to cart</span>
          </button>
        </div>
      </div>
    );
  }
  addCart = () => {
    const addedProduct = {
      product: this.props.product,
      quantity: this.state.quantity,
    };
    this.props.incrementCartCounter(); //dispatches an action to the store
    this.props.addProduct(addedProduct); //dispatches addProduct
  };
  handleQuantityChange = (qnty) => {
    console.log("Quantity:" + qnty);
    this.setState({ quantity: qnty });
  };
}
//add all actions down here
export default connect(null, { incrementCartCounter, addProduct })(
  ItemSelector
);

/*

homework:

create an item 
a div with an image and price
quantity picker

*/
