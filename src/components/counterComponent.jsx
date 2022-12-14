import React, { Component } from "react";

class Counter extends Component {
  // includes data that is private to component
  state = {
    // props is data we give to a component
    value: this.props.counter.value,
    //tags: ["tag1"],
  };

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClass()}> {this.formatCount()} </span>
        <button
          style={{ width: "100px", height: "30px" }}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={this.getButtonClass()}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClass() {
    let badge1 = "badge m-2 badge-";
    badge1 += this.props.counter.value === 0 ? "warning" : "primary";
    return badge1;
  }

  getButtonClass() {
    let btn1 = "btn btn-secondary b1";
    return btn1;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
