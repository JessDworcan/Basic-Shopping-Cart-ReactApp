import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
