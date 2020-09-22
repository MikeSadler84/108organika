import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    quantity: this.props.value,
  };
  render() {
    return (
      <div className="quantityPicker">
        <button onClick={this.increase} className="btn btn-sm btn-info">
          +
        </button>
        <label className="quantity">{this.state.quantity}</label>
        <button
          onClick={this.decrease}
          disabled={this.state.quantity === this.props.minimum}
          className="btn btn-sm btn-info"
        >
          -
        </button>
      </div>
    );
  }

  increase = () => {
    let value = this.state.quantity + this.props.minimum;
    this.setState({ quantity: value });
    this.props.onValueChange(value);
  };
  decrease = () => {
    let newVal = this.state.quantity - this.props.minimum;
    if (newVal >= this.props.minimum) {
      this.setState({ quantity: newVal });
      this.props.onValueChange(newVal);
    }
  };
}

export default QuantityPicker;
