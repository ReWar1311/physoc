import Header from "./components/Header";
import "./Gallery.css";
import Footer from "./components/Footer";
import Grids from "./components/Grids";
import React from "react";





function Gallary() {

  return (
    <div className="gallary-original">
      <Grids />
      <div className="gallary-bg">
        <Header />
        <div className="gallary-content"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Gallary;
