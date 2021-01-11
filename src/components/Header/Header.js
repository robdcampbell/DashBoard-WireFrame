import React from "react";
import "./Header.css";
import "../../images/facebook-logo.jpg";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="../../images/facebook-logo.jpg" alt="logo" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option">
          <HomeIcon fontSize="Large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="Large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="Large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="Large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="Large" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
