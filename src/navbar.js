import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-name">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ89jlLpiNDcvESPjnChG9VfymgrvGSyUwiQ&s"></img>
        <p>
          <span className="other">Other</span> Tirupathi, Andhara Pradhesh,India <i className="bi bi-chevron-down"></i>
        </p>
      </div>
      <div className="items">
        <ul>
          <li className="details" to="/about">
            <li>
            <i className="bi bi-info-circle-fill"></i> About
            </li>
          </li>
          <li className="details" to="/offer">
            <li>
              <i className="bi bi-gift-fill"></i> Offer
            </li>
          </li>
          <li className="details" to="/help">
            {" "}
            <li>
              <i className="bi bi-question-circle-fill"></i> Help
            </li>
          </li>
          <li>
            <i className="bi bi-person-circle"></i> Sign in
          </li>
          <li>
            <i className="bi bi-cart-fill"></i> Cart
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
