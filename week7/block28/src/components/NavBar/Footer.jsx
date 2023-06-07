import React from "react";
import { Routes, Route, Link } from "react-router-dom";


function Footer() {
    return (
      <>
        <div id="footer-container">
          <div id="footer">
            <Link to={"/"}>Home</Link>
            <Link to={"/blue"}>Blue</Link>
            <Link to={"/red"}>Red</Link>
            <Link to={"/orange"}>Orange</Link>
            <Link to={"/yellow"}>Yellow</Link>
          </div>

        </div>
      </>
    );
  }
  
  export default Footer;