import React from "react";
import "./Footer.css";
import ListFooter from "./ListFooter";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <h4>Get to Know Us</h4>
        <ListFooter title="Careers" link="#" />
        <ListFooter title="Blog" link="#" />
        <ListFooter title="About Amazon" link="#" />
        <ListFooter title="Sustainability" link="#" />
        <ListFooter title="Investor Relations" link="#" />
        <ListFooter title="Amazon Devices" link="#" />
        <ListFooter title="Amazon Tours" link="#" />
      </div>

      <div className="footer__row">
        <h4>Make Money with Us</h4>
        <ListFooter title="Sell products on Amazon" link="#" />
        <ListFooter title="Sell apps on Amazon" link="#" />
        <ListFooter title="Become an Affiliate" link="#" />
        <ListFooter title="Advertise Your Products" link="#" />
        <ListFooter title="Self-Publish with Us" link="#" />
        <ListFooter title="Host an Amazon Hub" link="#" />
        <ListFooter title="›See More Make Money with Us" link="#" />
      </div>

      <div className="footer__row">
        <h4>Amazon Payment Products</h4>
        <ListFooter title="Amazon Business Card" link="#" />
        <ListFooter title="Shop with Points" link="#" />
        <ListFooter title="Reload Your Balance" link="#" />
        <ListFooter title="Amazon Currency Converter" link="#" />
      </div>

      <div className="footer__row">
        <h4>Let Us Help You</h4>
        <ListFooter title="Amazon and COVID-19" link="#" />
        <ListFooter title="Your Account" link="#" />
        <ListFooter title="Your Orders" link="#" />
        <ListFooter title="Shipping Rates & Policies" link="#" />
        <ListFooter title="Returns & Replacements" link="#" />
        <ListFooter title="Manage Your Content and Devices" link="#" />
        <ListFooter title="Amazon Assistant" link="#" />
        <ListFooter title="Help" link="#" />
      </div>
    </div>
  );
}

export default Footer;
