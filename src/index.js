import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Body from "./body";
import ScrollBar from "./scrollBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollBar/>
      <Body/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
