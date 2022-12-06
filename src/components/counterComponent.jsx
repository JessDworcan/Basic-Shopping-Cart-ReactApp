import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className={this.getButtonClass()}
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create new tag!  "}
        {this.renderTags()}
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClass() {
    let badge1 = "badge m-2 badge-";
    badge1 += this.state.count === 0 ? "warning" : "primary";
    return badge1;
  }

  getButtonClass() {
    let btn1 = "btn btn-secondary b1";
    return btn1;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
