import React from "react";
import ReactDOM from "react-dom";
import ReactBreakpoints from "react-breakpoints";
import "antd/dist/antd.css";
import Navbar from "./ui/navbar/Navbar";
import { menuItems } from "./utils/menuUtils";
import { breakpoints } from "./utils/sharedUtils";

function App() {
  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Navbar menuItems={menuItems} />
    </ReactBreakpoints>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
