import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './components/navbar.jsx'
import "./style.css";
import Bgimage from "./components/bgimage.jsx";
import Landing from "./landing.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
