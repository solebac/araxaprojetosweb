import React from "react";
import "./assets/css/util/base.css";
import "./assets/css/navs.css";
import "./assets/css/home.css";
import "./assets/css/buttons.css";
import BannerHome from "./components/BannerHome";
import Navbar from "./components/Navbar";
import Capa from "./components/Capa";

function App() {
  return (
    <>
      <BannerHome />
      <Navbar />
      <Capa />
      
    </>
  );
}

export default App;
