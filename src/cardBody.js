import React from "react";
// import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";
import BestFlex from "./best";
import { url } from "./mockData/mockData";

const Card = (props) => {
  return (
    <div className="box">
      <img className="food-img" src={url + props.data.info.cloudinaryImageId} alt="food-img"></img>
      <h3 className="place"> {props.data.info.name}</h3>
      <h3 className="rating"><span><i className="bi bi-star-fill"></i>{" "}
        </span>{" "}
        {props.data.info.avgRating} <span>22min</span>
      </h3>
      <p className="hotel">{props.data.info.cuisines.join(",")} </p>
      <p className="room">{props.data.info.locality}</p>
    </div>
  );
};


const CardFlex=()=>{
    const [resto,setresto]=useState([])
    // const [search,setsearch]=useState([])
    useEffect(()=>{
        async function swiggy(){
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const OriginalData=await data.json()
            // console.log(OriginalData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setresto(OriginalData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        swiggy()
    },[])
    if (resto.length==0){
      return <Shimmer/>
    }
    else{
      return <div>
        <div className="filter-contaier">
      <button className="filter-btn" onClick={()=>{
                const aboveFour = resto.filter((x)=>{
                     return x.info.avgRating>4
                    })
                    console.log(aboveFour)
      }}>Ratings 4.0+</button>
      <button className="filter-btn ">Rs. 300-Rs. 600</button>
      <button className="filter-btn">Less than Rs. 300</button>
      </div>
      <div className="card-flex">
        {
          resto.map((x)=>{
            return <Card data={x}/>
          })
        }
      </div>
      
  </div>
    }
}

const CardBody = () => {
  return (
    <div className="card-body">
      
      <h2 className="heading">Best offers for you</h2>
      <BestFlex />
      <h2 className="heading">
        Restaurants with online food delivery in Chittoor
      </h2>
      <CardFlex />
      
    </div>
  );
};
export default CardBody;
