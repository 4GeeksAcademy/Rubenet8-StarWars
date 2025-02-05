//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout.jsx";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
