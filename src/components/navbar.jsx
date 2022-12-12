import React from "react";

// Stateless Functional Component
const Navbar = (props) => {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a className="navbar-brand" href="http://localhost:3000/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
