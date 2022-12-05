import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  render() {
    let badge1 = "badge m-2 badge-";
    badge1 += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <span className={badge1}>{this.formatCount()}</span>
        <button className="btn btn-secondary">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
