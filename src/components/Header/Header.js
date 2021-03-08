import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnSyzoJ2w6Px23AXxxFH5wmWlRxW0Gppcyw&usqp=CAU"
          alt="amazon"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="optionLine__one">Hello Guest</span>
          <span className="optionLine__two">SignIn</span>
        </div>

        <div className="header__option">
          <span className="optionLine__one">Hello Guest</span>
          <span className="optionLine__two">& Order</span>
        </div>

        <div className="header__option">
          <span className="optionLine__one">Hello Guest</span>
          <span className="optionLine__two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="optionLine__two header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
