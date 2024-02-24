import React, { useState } from "react";
import "../allStyles.css/Header.css";
import Navbar from "../partials/Navbar.js";
import SearchBar from "../partials/SearchBar.js";
import ShoppingCart from "../partials/ShoppingCart.js";

const Header = () => {
  return (
    <div>
      <header class=" header ">
        {/*  <marquee class="marquee-container"> */}
        <h1 class="bannerText">
          <span class="Nene">NᴇNᴇ</span> collectionz
        </h1>
        {/* </marquee>*/}
        <SearchBar />
        <ShoppingCart />
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
