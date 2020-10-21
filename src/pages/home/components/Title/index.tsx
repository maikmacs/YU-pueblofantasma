import "./title.css";

import React from "react";

import logo from "../../../../assets/Pueblo-logo.png";

export default function Title() {
  return (
    <div className="pueblo-title">
      <div className="pueblo-logo">
        <img src={logo} id="pueblo-logo" alt="pueblo-logo" />
      </div>
      <h4>Un live stream moshpit con presentaciones de:</h4>
    </div>
  );
}
