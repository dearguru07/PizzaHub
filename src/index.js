import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Body from "./body";
// import Offers from "./offers";
import About from "./about";
import Menu from "./menu";
import Help from "./help";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
};

const ways=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"/",
      element:<Body/>
    },
      {
        path:"/restarents",
        element:<Menu/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/help",
        element:<Help/>
      },
      {
        path:"/restarents",
        element:<Menu/>
      }
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ways}/>);
