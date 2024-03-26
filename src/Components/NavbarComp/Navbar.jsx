import React from "react";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import "./nav.css";
import ListComp from "../ListComp/ListComp";
export default function Navbar() {
  return (
    <div className="nav">
      <div className="toggle">
        <ListComp />
      </div>
      <div className="logo">
        <img src={logo} alt="logo"  width={150} height={80} />
      </div>
      <div className="signin-btn">
        <button >
          Sign in
          <img src={arrow} alt="sign in" />
        </button>
      </div>
    </div>
  );
}
