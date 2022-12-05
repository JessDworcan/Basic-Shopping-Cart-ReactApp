import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button className="btn btn-secondary">Increment</button>
      </div>
    );
  }

  getBadgeClass() {
    let badge1 = "badge m-2 badge-";
    badge1 += this.state.count === 0 ? "warning" : "primary";
    return badge1;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
