import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}> {this.formatCount()} </span>
        <button
          style={{ width: "100px", height: "30px" }}
          onClick={() => this.handleIncrement()}
          className={this.getButtonClass()}
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
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
    badge1 += this.state.value === 0 ? "warning" : "primary";
    return badge1;
  }

  getButtonClass() {
    let btn1 = "btn btn-secondary b1";
    return btn1;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
