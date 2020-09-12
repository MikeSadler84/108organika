import React, { Component } from "react";

class QuantityPicker extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-sm btn-info">+</button>
        <label>1</label>
        <button className="btn btn-sm btn-info">-</button>
      </div>
    );
  }
}

export default QuantityPicker;
