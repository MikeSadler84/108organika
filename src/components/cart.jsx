import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCartCounter } from "./../store/actions/index";
import CartItem from "./cartItem";
import "./cart.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <h3>There are {this.props.products.length} items in your cart</h3>
        <div className="itemsInCart">
          {this.props.products.map((product) => (
            <CartItem key={product.product.id} product={product}></CartItem>
          ))}
        </div>
      </div>
    );
  }
  testDispatch = () => {
    console.log("dispatching");
    this.props.incrementCartCounter(); //dispatches an action to the store
  };
}
//read from the state using the function below
const mapStateToProps = (state) => {
  return {
    products: state.cart,
  };
};
export default connect(mapStateToProps, { incrementCartCounter })(Cart);
