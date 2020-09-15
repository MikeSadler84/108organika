import React, { Component } from "react";

class ItemSelector extends Component {
  state = {
    quantity: 1,
    price: 60,
  };
  render() {
    return (
      <div className="img">
        <div>
          <img
            src="https://s3.gaming-cdn.com/images/products/4622/orig/monster-hunter-world-iceborne-cover.jpg"
            alt="Monster Hunter"
            width="200px"
          ></img>
        </div>
        <div>
          <p>${this.state.price}</p>
        </div>
        <div>
          <button onClick={this.increase} className="btn btn-sm btn-info">
            +
          </button>
          <label>{this.state.quantity}</label>
          <button
            onClick={this.decrease}
            disabled={this.state.quantity === 0}
            className="btn btn-sm btn-info"
          >
            -
          </button>
        </div>
      </div>
    );
  }
  increase = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  decrease = () => {
    let newVal = this.state.quantity - 1;
    if (newVal >= 0) {
      this.setState({ quantity: newVal });
    }
  };
}

export default ItemSelector;

/*

homework:

create an item 
a div with an image and price
quantity picker

*/
