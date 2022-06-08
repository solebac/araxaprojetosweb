import React from "react";
import "./assets/css/util/base.css";
import "./assets/css/navs.css";
import "./assets/css/home.css";
import "./assets/css/buttons.css";
import "./assets/css/news.css";
import "./assets/css/rodape.css";
import BannerHome from "./components/BannerHome";
import Navbar from "./components/Navbar";
import Capa from "./components/Capa";
import MainHome from "./components/MainHome";
import Footers from "./components/Footers";

function App() {
  return (
    <>
      <BannerHome />
      <Navbar />
      <Capa />
      <MainHome />
      <Footers />
    </>
  );
}

export default App;
