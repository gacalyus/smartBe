import * as React from "react";
import smartLogo from "../logos/smartLogo.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={smartLogo} className="App-logo" alt="logo" />
      <span className="smart-be">Smart Be</span>
    </div>
  );
}
