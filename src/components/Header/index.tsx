import "./header.css";

import React from "react";

import logo from "../../assets/YU-Logo.png";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} id="yu-logo" alt="logo" />
    </div>
  );
}
