import React from "react";
import "./Header.css";
import "../../images/facebook-logo.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header__left"></div>
      <img src="../../images/facebook-logo.jpg" alt="logo" />
      <div className="header__middle"></div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
