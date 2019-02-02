import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main/Main.Component";
import * as ReactRouter from "react-router-dom";
 
ReactDOM.render(
  <ReactRouter.BrowserRouter>
  <Main/>
  </ReactRouter.BrowserRouter>, 
  document.getElementById("root")
);