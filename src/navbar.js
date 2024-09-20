import React from "react";
import ReactDOM from "react-dom/client";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-name">
        <img className="logo" src={"swiggy new logo.png"}></img>
        <p>
          <span className="other">Other</span> Tirupathi, Andhara Pradhesh,
          India <i className="bi bi-chevron-down"></i>
        </p>
      </div>
      <div className="items">
        <ul>
          <li className="details" to="/about">
            <li>
            <i class="bi bi-info-circle-fill"></i> About
            </li>
          </li>
          <li className="details" to="/offer">
            <li>
              <i className="bi bi-gift"></i> Offer
            </li>
          </li>
          <li className="details" to="/help">
            {" "}
            <li>
              <i className="bi bi-question-circle"></i> Help
            </li>
          </li>
          <li>
            <i className="bi bi-person-circle"></i> Sign in
          </li>
          <li>
            <i className="bi bi-cart2"></i> Cart
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
