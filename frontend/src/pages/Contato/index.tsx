import * as React from "react";
import "../../assets/css/navs.css";
import "../../assets/css/home.css";
import Navbar from "../../components/Navbar";
import BannerContato from "../../components/BannerContato";
import MainContato from "../../components/MainContato";
import Footers from "../../components/Footers";

const Contato = () => {
  return (
    <>
      <BannerContato />
      <Navbar />
      <MainContato />
      <Footers />
    </>
  );
};
export default Contato;
