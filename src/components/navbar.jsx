import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img
            src="/images/tasks-icon.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          ></img>
          Any Action
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
