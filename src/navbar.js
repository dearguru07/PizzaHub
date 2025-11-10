import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-name">
        <Link><img alt="logo-img" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8NxOe86yzJPx1tsRMWHqE8qM8ukXGgjOQw&s"></img></Link>
        <p>
          <span className="other">Other</span> Tirupathi, Andhara Pradhesh,India <i className="bi bi-chevron-down"></i>
        </p>
      </div>
      <div className="items">
        <ul>
          <Link className="details" to="/restarents"><li><i className="bi bi-gift-fill"></i> Offers</li></Link>
          <Link className="details" to="About"><li><i className="bi bi-info-circle-fill"></i> About</li></Link>
          <Link className="details" to="/Help"><li><i className="bi bi-question-circle-fill"></i> Help</li></Link>
        <li><i className="bi bi-person-circle"></i> Sign in</li>
        <li><i className="bi bi-cart-fill"></i> Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
