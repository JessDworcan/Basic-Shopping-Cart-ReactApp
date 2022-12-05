import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
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

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create new tag!"}
        {this.renderTags()}
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
