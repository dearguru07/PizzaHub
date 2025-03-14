import React from "react";
// import { useState, useEffect } from "react";
// import { MenuUrl } from "./mockData/mockData";
// import { Params, useParams } from "react-router-dom";

const MenuCard = (props) => {
  return (
    <div className="parent">
      <div className="inner-par">
        <h3 className="g-box"><span className="g-circle"></span></h3>
        <h4 className="item-name">Ghee Rice Combo</h4>
        <h4 className="cost">₹200</h4>
        <h5 className="rating"><span><i className="bi bi-star-fill"></i></span> 4.3(235)</h5>
        <p className="gee">Ghee rice + 1pc Curry + 2pc chicken starter + 1 Roomali Roti</p>
      </div>
      <div className="relative">
        <img className="item-img" alt="food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2e792fd96688d1f6e23bccaa4e61af3a"></img>
        <div className="absolute">
          <button className="add-btn">ADD</button>
        </div>
      </div>
    </div>
  );
};


const Menu = () => {
  return (
    <div className="pages">
      <h3>Recomended (20) </h3>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
     <MenuCard/>
    </div>
  );
};
export default Menu;
