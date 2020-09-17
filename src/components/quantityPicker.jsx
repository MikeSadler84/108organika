import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    name: "Mike",
  };
  render() {
    return (
      <div className="quantityPicker">
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

export default QuantityPicker;
